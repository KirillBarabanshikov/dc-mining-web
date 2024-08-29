import fs from 'node:fs/promises';
import express from 'express';
import { Transform } from 'node:stream';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';
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

app.use('*', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '');

        const response = await fetch('https://dc-mining.itlabs.top/api/seos');
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
