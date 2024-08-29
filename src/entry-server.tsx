import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import { App } from './app/App.tsx';

export default function render(url: string, opts: any) {
    const stream = renderToPipeableStream(
        <React.StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </React.StrictMode>,
        {
            ...opts,
            onAllReady() {
                const helmet = Helmet.renderStatic();
                const modifiedHead = opts.head
                    .replace('<!--title-->', helmet.title.toString())
                    .replace('<!--description-->', helmet.meta.toString());
                opts.res.write(modifiedHead);
                opts.onAllReady();
            },
        },
    );

    return stream;
}
