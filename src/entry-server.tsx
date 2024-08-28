import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './app/App.tsx';

export default function render(url: string, opts: any) {
    const stream = renderToPipeableStream(
        <React.StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </React.StrictMode>,
        opts,
    );

    return stream;
}
