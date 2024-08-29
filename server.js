import fs from 'node:fs/promises';
import express from 'express';
import { Transform } from 'node:stream';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';
const baseUrl = process.env.VITE_BASE_URL;
const ABORT_DELAY = 10000;

const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : '';
const ssrManifest = isProduction ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8') : undefined;

const app = express();

let vite;
if (!isProduction) {
    const { createServer } = await import('vite');
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
    });
    app.use(vite.middlewares);
} else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(base, sirv('./dist/client', { extensions: [] }));
}

app.get('/robots.txt', async (req, res) => {
    try {
        const response = await fetch(`${baseUrl}/api/settings`);
        const { robots } = await response.json();

        await fs.writeFile('./robots.txt', robots);

        res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        res.send(robots);
    } catch (error) {
        console.error('Failed to fetch robots.txt data:', error);
        res.status(500).send('Failed to generate robots.txt');
    }
});

app.get('/sitemap.xml', async (req, res) => {
    try {
        const response = await fetch(`${baseUrl}/api/settings`);
        const { sitemap } = await response.json();

        await fs.writeFile('./sitemap.xml', sitemap);

        res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
        res.send(sitemap);
    } catch (error) {
        console.error('Failed to fetch sitemap.xml data:', error);
        res.status(500).send('Failed to generate sitemap.xml');
    }
});

app.use('*', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '');

        const response = await fetch(`${baseUrl}/api/seos`);
        const data = await response.json();

        console.log(data);

        let template;
        let render;
        if (!isProduction) {
            template = await fs.readFile('./index.html', 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
        } else {
            template = templateHtml;
            render = (await import('./dist/server/entry-server.js')).render;
        }

        let didError = false;

        const { stream, helmetContext } = render(req.url, data, ssrManifest, {
            onShellError() {
                res.status(500);
                res.set({ 'Content-Type': 'text/html' });
                res.send('<h1>Something went wrong</h1>');
            },
            onShellReady() {
                res.status(didError ? 500 : 200);
                res.set({ 'Content-Type': 'text/html' });

                const transformStream = new Transform({
                    transform(chunk, encoding, callback) {
                        res.write(chunk, encoding);
                        callback();
                    },
                });

                const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`);

                const helmetData = helmetContext.helmet;

                res.write(
                    htmlStart
                        .replace(
                            '<!--app-head-->',
                            `${helmetData?.title?.toString() || ''}\n${helmetData?.meta?.toString() || ''}\n${helmetData?.link?.toString() || ''}`,
                        )
                        .replace(
                            '<!--initial-data-->',
                            `<script defer>window.__INITIAL_DATA__ = ${JSON.stringify(data)}</script>`,
                        ),
                );

                transformStream.on('finish', () => {
                    res.end(htmlEnd);
                });

                stream.pipe(transformStream);
            },
            onError(error) {
                didError = true;
                console.error(error);
            },
        });

        setTimeout(() => {
            stream.abort();
        }, ABORT_DELAY);
    } catch (e) {
        vite?.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
