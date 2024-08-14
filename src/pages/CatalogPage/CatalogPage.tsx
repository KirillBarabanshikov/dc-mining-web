import { useParams, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Breadcrumbs } from '@/shared/ui';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { OrderCallHelpBanner } from '@/features/call';
import { Catalog, Managers } from '@/widgets';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import styles from './CatalogPage.module.scss';
import { useSetFiltersMutation } from '@/entities/filter';
import { useEffect } from 'react';

const paths = [{ name: 'Главная', path: '/' }];

const CatalogPage = () => {
    const { id } = useParams();
    const { data: category, isLoading } = useGetCategoryByIdQuery(id as string);
    const [setFilters] = useSetFiltersMutation();
    const { countProducts } = useAppSelector((state) => state.catalog);
    const matches = useMediaQuery('(max-width: 855px)');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page') ?? '1';
        category && setFilters({ body: { type: category.title }, params: { page, limit: '25' } });
    }, [category]);

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: category?.name ?? '', path: '' }]} />
                <div className={styles.catalogTitle}>
                    <h1>{isLoading ? '' : category?.name}</h1>
                    <span>{isLoading ? '' : `${countProducts} товаров`}</span>
                </div>
            </div>
            <Catalog />
            <div className={clsx(styles.banners, 'container')}>
                {matches && <OrderCallHelpBanner />}
                <Managers />
            </div>
        </div>
    );
};

export default CatalogPage;
