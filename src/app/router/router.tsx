import { createBrowserRouter } from 'react-router-dom';
import { MainPage, AboutPage, LeasingPage, DataCenterPage, FAQPage } from '@/pages';
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
            {
                path: '/leasing',
                element: <LeasingPage />,
            },
            {
                path: '/data-center',
                element: <DataCenterPage />,
            },
            {
                path: '/faq',
                element: <FAQPage />,
            },
        ],
    },
]);
