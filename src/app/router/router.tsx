import { createBrowserRouter } from 'react-router-dom';
import { MainPage, AboutPage } from '@/pages';
import { Layout } from '@/app/layout';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
        ],
    },
]);
