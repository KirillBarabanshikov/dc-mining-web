import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Breadcrumbs } from '@/shared/ui';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { useGetProductsByCategoryIdQuery } from '@/entities/product';
import { OrderCallHelpBanner } from '@/features/call';
import { Catalog, Managers } from '@/widgets';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import styles from './CatalogPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

const CatalogPage = () => {
    const { id } = useParams();
    const { data: category, isLoading } = useGetCategoryByIdQuery(id as string);
    useGetProductsByCategoryIdQuery(id as string);
    const { countProducts } = useAppSelector((state) => state.catalog);
    const matches = useMediaQuery('(max-width: 855px)');

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
