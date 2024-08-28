import React from 'react';
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './app/App.tsx';

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
    return renderToPipeableStream(
        <React.StrictMode>
            <App>
                <StaticRouter location={_url} />
            </App>
        </React.StrictMode>,
        options,
    );
}
