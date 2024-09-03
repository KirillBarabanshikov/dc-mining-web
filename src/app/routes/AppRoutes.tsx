import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ISeo } from '@/entities/seo';
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

interface IAppRoutes {
    seoData: ISeo[];
}

export const AppRoutes: FC<IAppRoutes> = ({ seoData }) => {
    return (
        <BaseLayout>
            <Routes>
                <Route
                    path={'/'}
                    element={<MainPage seo={seoData.find((seo) => seo.choose === 'Главная страница')} />}
                />
                <Route
                    path={'/about'}
                    element={<AboutPage seo={seoData.find((seo) => seo.choose === 'О компании')} />}
                />
                <Route
                    path={'/leasing'}
                    element={<LeasingPage seo={seoData.find((seo) => seo.choose === 'Лизинг')} />}
                />
                <Route
                    path={'/data-center'}
                    element={<DataCenterPage seo={seoData.find((seo) => seo.choose === 'Размещение в дата центре')} />}
                />
                <Route path={'/compare'} element={<ComparePage />} />
                <Route path={'/catalog/:id/:slug'} element={<CatalogPage />} />
                <Route path={'/product/:id/:slug'} element={<ProductPage />} />
                <Route path={'/faq'} element={<FAQPage seo={seoData.find((seo) => seo.choose === 'FAQ')} />} />
                <Route
                    path={'/delivery'}
                    element={<DeliveryPage seo={seoData.find((seo) => seo.choose === 'Доставка')} />}
                />
                <Route
                    path={'/payment'}
                    element={<PaymentPage seo={seoData.find((seo) => seo.choose === 'Оплата')} />}
                />
                <Route path={'/news'} element={<NewsPage seo={seoData.find((seo) => seo.choose === 'СМИ о нас')} />} />
                <Route
                    path={'/service'}
                    element={<ServicePage seo={seoData.find((seo) => seo.choose === 'Ремонт и сервис')} />}
                />
                <Route path={'/favorites'} element={<FavoritesPage />} />
                <Route
                    path={'/links'}
                    element={<LinksPage seo={seoData.find((seo) => seo.choose === 'Полезные ссылки')} />}
                />
                <Route path={'/links/:id/:slug'} element={<LinkDetailsPage />} />
            </Routes>
        </BaseLayout>
    );
};
