import { ProductsList } from '@/widgets';
import { useLazyGetProductsByCategoryIdQuery } from '@/entities/product';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Filters, Sorting, CatalogPagination, CustomFilters } from './ui';
import { useEffect } from 'react';
import { setProducts } from '@/entities/catalog';
import { setCountProducts } from '@/entities/catalog/model/slice.ts';
import styles from './Catalog.module.scss';

export const Catalog = () => {
    const { category, countProducts } = useAppSelector((state) => state.catalog);
    const [getProducts] = useLazyGetProductsByCategoryIdQuery();
    const { viewMode } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.catalog);

    useEffect(() => {
        category && setData(category.id);
    }, [category]);

    const setData = async (id: number) => {
        await getProducts(id)
            .unwrap()
            .then((data) => {
                dispatch(setProducts(data.products));
                dispatch(setCountProducts(data.countProducts));
            });
    };

    return (
        <div className={styles.catalog}>
            <CustomFilters className={styles.customFilter} />
            <Filters className={styles.filters} />
            <Sorting className={styles.sorting} />
            <ProductsList products={products} className={styles.productList} viewMode={viewMode} />
            <CatalogPagination countProducts={countProducts} className={styles.pagination} />
        </div>
    );
};
