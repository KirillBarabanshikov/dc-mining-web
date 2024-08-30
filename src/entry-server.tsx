import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './app/App.tsx';

export function render(url: string, data: any, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
    const helmetContext = {};

    console.log(data);

    console.log(url);

    const stream = renderToPipeableStream(
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={`/${url}`}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>,
        options,
    );

    return { stream, helmetContext };
}
