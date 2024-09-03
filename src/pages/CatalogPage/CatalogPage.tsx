import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { useLocation, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Breadcrumbs } from '@/shared/ui';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { OrderCallHelpBanner } from '@/features/call';
import { Catalog, LivePhotos, Managers } from '@/widgets';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { useSetFiltersMutation } from '@/entities/filter';
import { setCategory } from '@/entities/catalog';
import { useCatalogFilters } from '@/features/catalog';
import styles from './CatalogPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

interface ICatalogPageProps {
    seoData: ISeo[];
}

const CatalogPage: FC<ICatalogPageProps> = ({ seoData }) => {
    const { id } = useParams();
    const { data: category } = useGetCategoryByIdQuery(id as string);
    const [setFilters] = useSetFiltersMutation();
    const { countProducts } = useAppSelector((state) => state.catalog);
    const matches = useMediaQuery('(max-width: 855px)');
    const dispatch = useAppDispatch();
    const { getFilterBody, getCurrentPage } = useCatalogFilters();
    const { state, pathname } = useLocation();

    useEffect(() => {
        if (!category) return;
        dispatch(setCategory(category));
    }, [category]);

    useEffect(() => {
        if (!category) return;

        const body = getFilterBody(category.title);
        const page = getCurrentPage();
        setFilters({ body, params: { page } });
    }, [state, category]);

    const getCategorySeo = (): ISeo | undefined => {
        if (!category) return;

        if (category.title === 'asicMiners') {
            return seoData.find((seo) => seo.choose === 'Асик майнеры');
        }
        if (category.title === 'containersMining') {
            return seoData.find((seo) => seo.choose === 'Контейнеры для майнинга');
        }
        if (category.title === 'firmware') {
            return seoData.find((seo) => seo.choose === 'Прошивки для оборудования');
        }
        if (category.title === 'accessories') {
            return seoData.find((seo) => seo.choose === 'Комплектующие');
        }
        if (category.title === 'readyBusiness') {
            return seoData.find((seo) => seo.choose === 'Готовый бизнес');
        }
    };

    return (
        <div className={styles.catalog}>
            <Helmet>
                <title>{getCategorySeo()?.title}</title>
                <meta name='description' content={getCategorySeo()?.description} />
                <link rel='canonical' href={'https://dc-mining.ru' + pathname} />
            </Helmet>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: category?.name ?? '', path: '' }]} />
                <div className={styles.catalogTitle}>
                    <h1>{getCategorySeo()?.hOne}</h1>
                    <span>{`${countProducts} товаров`}</span>
                </div>
            </div>
            <Catalog key={state} />
            {category && (
                <LivePhotos images={category.images.map(({ image }) => image)} className={styles.livePhotos} />
            )}
            <div className={clsx(styles.banners, 'container')}>
                {matches && <OrderCallHelpBanner />}
                <Managers />
            </div>
        </div>
    );
};

export default CatalogPage;
