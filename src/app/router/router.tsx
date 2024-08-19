import { createBrowserRouter } from 'react-router-dom';
import {
    MainPage,
    AboutPage,
    LeasingPage,
    DataCenterPage,
    FAQPage,
    DeliveryPage,
    PaymentPage,
    NewsPage,
    ServicePage,
    FavoritesPage,
    ComparePage,
    CatalogPage,
    ProductPage,
    LinksPage,
    LinkDetailsPage,
} from '@/pages';
import { BaseLayout } from '@/app/layout';

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
            {
                path: '/catalog/:id/:slug',
                element: <CatalogPage />,
            },
            {
                path: '/product/:id/:slug',
                element: <ProductPage />,
            },
            {
                path: '/faq',
                element: <FAQPage />,
            },
            {
                path: '/delivery',
                element: <DeliveryPage />,
            },
            {
                path: '/payment',
                element: <PaymentPage />,
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
            {
                path: '/links',
                element: <LinksPage />,
            },
            {
                path: '/links/:id/:slug',
                element: <LinkDetailsPage />,
            },
        ],
    },
]);
