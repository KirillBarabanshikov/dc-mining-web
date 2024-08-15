import { useParams, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Breadcrumbs } from '@/shared/ui';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { OrderCallHelpBanner } from '@/features/call';
import { Catalog, Managers } from '@/widgets';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import styles from './CatalogPage.module.scss';
import { useSetFiltersMutation } from '@/entities/filter';
import { useEffect } from 'react';
import { setCategory } from '@/entities/catalog';
import { CHARACTERISTICS_KEYS } from '@/shared/consts';
import { IFilterBody } from '@/entities/filter/api';

const paths = [{ name: 'Главная', path: '/' }];

const CatalogPage = () => {
    const { id } = useParams();
    const { data: category, isLoading, isFetching } = useGetCategoryByIdQuery(id as string);
    const [setFilters] = useSetFiltersMutation();
    const { countProducts } = useAppSelector((state) => state.catalog);
    const matches = useMediaQuery('(max-width: 855px)');
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!category) return;

        const characteristics: string[] = [];
        const currentPage = searchParams.get('page') ?? '1';

        for (const [key, value] of searchParams.entries()) {
            if (key === 'brand') continue;

            if (key in CHARACTERISTICS_KEYS) {
                characteristics.push(`${CHARACTERISTICS_KEYS[key]}=${value}`);
            }
        }
        const body: IFilterBody = {
            type: category?.title ?? '',
        };

        if (characteristics.length) {
            body.characteristics = characteristics.join(';');
        }

        if (searchParams.get('offers')) {
            body.tags = searchParams.get('offers') ?? '';
        }

        if (searchParams.get('brand')) {
            body.brand = searchParams.get('brand') ?? '';
        }

        if (searchParams.get('order')) {
            if (searchParams.get('order') === '1') {
                body.sortBy = 'popularity';
            }

            if (searchParams.get('order') === '2') {
                body.sortBy = 'discount';
            }

            if (searchParams.get('order') === '3') {
                body.sortBy = 'price';
                body.sortOrder = 'ASC';
            }

            if (searchParams.get('order') === '4') {
                body.sortBy = 'price';
                body.sortOrder = 'DESC';
            }
        } else {
            body.sortBy = 'popularity';
        }

        if (searchParams.get('profitable')) {
            body.profitable = true;
        }

        if (searchParams.get('powerful')) {
            body.powerful = true;
        }

        if (searchParams.get('customFilters')) {
            body.customFilters = searchParams.get('customFilters') ?? '';
        }

        dispatch(setCategory(category));
        setFilters({ body, params: { page: currentPage } });
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
            {!isFetching && <Catalog />}
            <div className={clsx(styles.banners, 'container')}>
                {matches && <OrderCallHelpBanner />}
                <Managers />
            </div>
        </div>
    );
};

export default CatalogPage;
