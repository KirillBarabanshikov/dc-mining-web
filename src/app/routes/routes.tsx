import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '../layout/BaseLayout.tsx';

import MainPage from '@/pages/MainPage/MainPage.tsx';
import AboutPage from '@/pages/AboutPage/AboutPage.tsx';
import LeasingPage from '@/pages/LeasingPage/LeasingPage.tsx';
import DataCenterPage from '@/pages/DataCenterPage/DataCenterPage.tsx';
import FAQPage from '@/pages/FAQPage/FAQPage.tsx';
import DeliveryPage from '@/pages/DeliveryPage/DeliveryPage.tsx';
import PaymentPage from '@/pages/PaymentPage/PaymentPage.tsx';
import NewsPage from '@/pages/NewsPage/NewsPage.tsx';
import ServicePage from '@/pages/ServicePage/ServicePage.tsx';
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage.tsx';
import ComparePage from '@/pages/ComparePage/ComparePage.tsx';
import CatalogPage from '@/pages/CatalogPage/CatalogPage.tsx';
import ProductPage from '@/pages/ProductPage/ProductPage.tsx';
import LinksPage from '@/pages/LinksPage/LinksPage.tsx';
import LinkDetailsPage from '@/pages/LinkDetailsPage/LinkDetailsPage.tsx';

export const routes = (
    <BaseLayout>
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/leasing'} element={<LeasingPage />} />
            <Route path={'/data-center'} element={<DataCenterPage />} />
            <Route path={'/compare'} element={<ComparePage />} />
            <Route path={'/catalog/:id/:slug'} element={<CatalogPage />} />
            <Route path={'/product/:id/:slug'} element={<ProductPage />} />
            <Route path={'/faq'} element={<FAQPage />} />
            <Route path={'/delivery'} element={<DeliveryPage />} />
            <Route path={'/payment'} element={<PaymentPage />} />
            <Route path={'/news'} element={<NewsPage />} />
            <Route path={'/service'} element={<ServicePage />} />
            <Route path={'/favorites'} element={<FavoritesPage />} />
            <Route path={'/links'} element={<LinksPage />} />
            <Route path={'/links/:id/:slug'} element={<LinkDetailsPage />} />
        </Routes>
    </BaseLayout>
);
