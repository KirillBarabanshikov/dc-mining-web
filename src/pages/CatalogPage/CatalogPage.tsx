import { useEffect } from 'react';
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

const CatalogPage = () => {
    const { id } = useParams();
    const { data: category } = useGetCategoryByIdQuery(id as string);
    const [setFilters] = useSetFiltersMutation();
    const { countProducts } = useAppSelector((state) => state.catalog);
    const matches = useMediaQuery('(max-width: 855px)');
    const dispatch = useAppDispatch();
    const { getFilterBody, getCurrentPage } = useCatalogFilters();
    const { state } = useLocation();

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

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: category?.name ?? '', path: '' }]} />
                <div className={styles.catalogTitle}>
                    <h1>{category?.name}</h1>
                    <span>{`${countProducts} товаров`}</span>
                </div>
            </div>
            <Catalog key={state} />
            <LivePhotos images={[]} className={styles.livePhotos} />
            <div className={clsx(styles.banners, 'container')}>
                {matches && <OrderCallHelpBanner />}
                <Managers />
            </div>
        </div>
    );
};

export default CatalogPage;
