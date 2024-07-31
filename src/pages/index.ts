import { lazy } from 'react';

export const MainPage = lazy(() => import('./MainPage/MainPage.tsx'));
export const AboutPage = lazy(() => import('./AboutPage/AboutPage.tsx'));
export const LeasingPage = lazy(() => import('./LeasingPage/LeasingPage.tsx'));
export const DataCenterPage = lazy(() => import('./DataCenterPage/DataCenterPage.tsx'));
