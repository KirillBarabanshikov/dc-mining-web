import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Placeholder } from '@/shared/ui';
import { BaseLayout } from '../layout/BaseLayout.tsx';

export const MainPage = lazy(() => import('@/pages/MainPage/MainPage.tsx'));
export const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage.tsx'));
export const LeasingPage = lazy(() => import('@/pages/LeasingPage/LeasingPage.tsx'));
export const DataCenterPage = lazy(() => import('@/pages/DataCenterPage/DataCenterPage.tsx'));
export const FAQPage = lazy(() => import('@/pages/FAQPage/FAQPage.tsx'));
export const DeliveryPage = lazy(() => import('@/pages/DeliveryPage/DeliveryPage.tsx'));
export const PaymentPage = lazy(() => import('@/pages/PaymentPage/PaymentPage.tsx'));
export const NewsPage = lazy(() => import('@/pages/NewsPage/NewsPage.tsx'));
export const ServicePage = lazy(() => import('@/pages/ServicePage/ServicePage.tsx'));
export const FavoritesPage = lazy(() => import('@/pages/FavoritesPage/FavoritesPage.tsx'));
export const ComparePage = lazy(() => import('@/pages/ComparePage/ComparePage.tsx'));
export const CatalogPage = lazy(() => import('@/pages/CatalogPage/CatalogPage.tsx'));
export const ProductPage = lazy(() => import('@/pages/ProductPage/ProductPage.tsx'));
export const LinksPage = lazy(() => import('@/pages/LinksPage/LinksPage.tsx'));
export const LinkDetailsPage = lazy(() => import('@/pages/LinkDetailsPage/LinkDetailsPage.tsx'));

export const routes = (
    <BaseLayout>
        <Routes>
            <Route
                path={'/'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <MainPage />
                    </Suspense>
                }
            />
            <Route
                path={'/about'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <AboutPage />
                    </Suspense>
                }
            />
            <Route
                path={'/leasing'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <LeasingPage />
                    </Suspense>
                }
            />
            <Route
                path={'/data-center'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <DataCenterPage />
                    </Suspense>
                }
            />
            <Route
                path={'/compare'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <ComparePage />
                    </Suspense>
                }
            />
            <Route
                path={'/catalog/:id/:slug'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <CatalogPage />
                    </Suspense>
                }
            />
            <Route
                path={'/product/:id/:slug'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <ProductPage />
                    </Suspense>
                }
            />
            <Route
                path={'/faq'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <FAQPage />
                    </Suspense>
                }
            />
            <Route
                path={'/delivery'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <DeliveryPage />
                    </Suspense>
                }
            />
            <Route
                path={'/payment'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <PaymentPage />
                    </Suspense>
                }
            />
            <Route
                path={'/news'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <NewsPage />
                    </Suspense>
                }
            />
            <Route
                path={'/service'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <ServicePage />
                    </Suspense>
                }
            />
            <Route
                path={'/favorites'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <FavoritesPage />
                    </Suspense>
                }
            />
            <Route
                path={'/links'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <LinksPage />
                    </Suspense>
                }
            />
            <Route
                path={'/links/:id/:slug'}
                element={
                    <Suspense fallback={<Placeholder />}>
                        <LinkDetailsPage />
                    </Suspense>
                }
            />
        </Routes>
    </BaseLayout>
);
