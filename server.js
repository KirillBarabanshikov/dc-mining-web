import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/entry-server.js';
import { Transform } from 'node:stream';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3010;
const ABORT_DELAY = 10000;

// Read the built HTML file
const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();
const [head, tail] = html.split('<!--app-->');

const app = express();

// Serve static assets
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use(express.static('public'));

// Handle all other routes with server-side rendering
app.use(async (req, res) => {
    try {
        const response = await fetch('https://dc-mining.itlabs.top/api/seos');
        const seos = await response.json();

        console.log(seos);

        const stream = renderApp(req.url, {
            onShellReady() {},
            onShellError(err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            },
            onAllReady() {
                res.status(200);

                const modifiedHead = head
                    .replace('<!--title-->', `<title>${seos[0]?.title || 'title'}</title>`)
                    .replace(
                        '<!--description-->',
                        `<meta name='description' content='${seos[0]?.description || 'description'}' />`,
                    );
                res.write(modifiedHead);

                const transformStream = new Transform({
                    transform(chunk, encoding, callback) {
                        res.write(chunk, encoding);
                        callback();
                    },
                });

                transformStream.on('finish', () => {
                    res.end(tail);
                });

                stream.pipe(transformStream);
            },
            onError(err) {
                console.error(err);
            },
        });

        setTimeout(() => {
            stream.abort();
        }, ABORT_DELAY);
    } catch (e) {
        console.log(e.stack);
        res.status(500).end(e.stack);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
