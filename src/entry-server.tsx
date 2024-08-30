import React from 'react';
import { ISeo } from '@/entities/seo';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './app/App.tsx';

export function render(url: string, seoData: ISeo[], _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
    const helmetContext = {};

    const stream = renderToPipeableStream(
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={`/${url}`}>
                    <App seoData={seoData} />
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>,
        options,
    );

    return { stream, helmetContext };
}
