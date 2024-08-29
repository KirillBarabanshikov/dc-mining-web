import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './app/App.tsx';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/shared/styles/index.css';

// const data = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
);
