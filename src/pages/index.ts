import { lazy } from 'react';

export const MainPage = lazy(() => import('./MainPage/MainPage.tsx'));
export const AboutPage = lazy(() => import('./AboutPage/AboutPage.tsx'));
export const LeasingPage = lazy(() => import('./LeasingPage/LeasingPage.tsx'));
export const DataCenterPage = lazy(() => import('./DataCenterPage/DataCenterPage.tsx'));
export const FAQPage = lazy(() => import('./FAQPage/FAQPage.tsx'));
export const DeliveryAndPaymentPage = lazy(() => import('./DeliveryAndPaymentPage/DeliveryAndPaymentPage.tsx'));
export const NewsPage = lazy(() => import('./NewsPage/NewsPage.tsx'));
export const ServicePage = lazy(() => import('./ServicePage/ServicePage.tsx'));
export const FavoritesPage = lazy(() => import('./FavoritesPage/FavoritesPage.tsx'));
export const ComparePage = lazy(() => import('./ComparePage/ComparePage.tsx'));
export const CatalogPage = lazy(() => import('./CatalogPage/CatalogPage.tsx'));
export const ProductPage = lazy(() => import('./ProductPage/ProductPage.tsx'));
export const LinksPage = lazy(() => import('./LinksPage/LinksPage.tsx'));
export const LinkDetailsPage = lazy(() => import('./LinkDetailsPage/LinkDetailsPage.tsx'));
