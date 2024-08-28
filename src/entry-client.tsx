import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App.tsx';
import { router } from '@/app/router';

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
        <App>
            <RouterProvider router={createBrowserRouter(router)} />
        </App>
    </React.StrictMode>,
);
