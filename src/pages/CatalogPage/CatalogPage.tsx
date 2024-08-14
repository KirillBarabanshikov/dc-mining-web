import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Breadcrumbs } from '@/shared/ui';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { OrderCallHelpBanner } from '@/features/call';
import { Managers, Catalog } from '@/widgets';
import { useAppDispatch, useMediaQuery } from '@/shared/lib';
import { setCategory } from '@/entities/catalog';
import styles from './CatalogPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

const CatalogPage = () => {
    const { id } = useParams();
    const { data: category } = useGetCategoryByIdQuery(id as string);
    const matches = useMediaQuery('(max-width: 855px)');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCategory(category));
    }, [category]);

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: category?.name ?? '', path: '' }]} />
                <div className={styles.catalogTitle}>
                    <h1>{category?.name}</h1>
                    <span>318 товаров</span>
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
