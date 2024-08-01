import { createBrowserRouter } from 'react-router-dom';
import {
    MainPage,
    AboutPage,
    LeasingPage,
    DataCenterPage,
    FAQPage,
    DeliveryPage,
    NewsPage,
    ServicePage,
    FavoritesPage,
    ComparePage,
} from '@/pages';
import { BaseLayout, LayoutWithoutFooter } from '@/app/layout';

export const router = createBrowserRouter([
    {
        element: <BaseLayout />,
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
                path: '/compare',
                element: <ComparePage />,
            },
        ],
    },
    {
        element: <LayoutWithoutFooter />,
        children: [
            {
                path: '/faq',
                element: <FAQPage />,
            },
            {
                path: '/delivery',
                element: <DeliveryPage />,
            },
            {
                path: '/news',
                element: <NewsPage />,
            },
            {
                path: '/service',
                element: <ServicePage />,
            },
            {
                path: '/favorites',
                element: <FavoritesPage />,
            },
        ],
    },
]);
