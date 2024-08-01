import { lazy } from 'react';

export const MainPage = lazy(() => import('./MainPage/MainPage.tsx'));
export const AboutPage = lazy(() => import('./AboutPage/AboutPage.tsx'));
export const LeasingPage = lazy(() => import('./LeasingPage/LeasingPage.tsx'));
export const DataCenterPage = lazy(() => import('./DataCenterPage/DataCenterPage.tsx'));
export const FAQPage = lazy(() => import('./FAQPage/FAQPage.tsx'));
export const DeliveryPage = lazy(() => import('./DeliveryPage/DeliveryPage.tsx'));
export const NewsPage = lazy(() => import('./NewsPage/NewsPage.tsx'));
export const ServicePage = lazy(() => import('./ServicePage/ServicePage.tsx'));
