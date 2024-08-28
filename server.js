// server.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/entry-server.js';
import { Transform } from 'node:stream';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const ABORT_DELAY = 10000;

// Read the built HTML file
const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();
const [head, tail] = html.split('<!--not rendered-->');

const app = express();

// Serve static assets
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

// Handle all other routes with server-side rendering
app.use((req, res) => {
    try {
        res.write(head);

        const stream = renderApp(req.url, {
            onShellReady() {
                res.status(200);

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
            onShellError(err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            },
            // onAllReady() {
            //     res.write(tail);
            //     res.end();
            // },
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
