import { ProductsList } from '@/widgets';
import { useGetProductsByCategoryIdQuery } from '@/entities/product';
import { useAppSelector } from '@/shared/lib';
import { Filters, Sorting, CatalogPagination, CustomFilters } from './ui';
import styles from './Catalog.module.scss';

export const Catalog = () => {
    const { category } = useAppSelector((state) => state.catalog);
    const { data: products } = useGetProductsByCategoryIdQuery(category?.id ?? 1);
    const { viewMode } = useAppSelector((state) => state.products);

    return (
        <div className={styles.catalog}>
            <CustomFilters className={styles.customFilter} />
            <Filters className={styles.filters} />
            <Sorting className={styles.sorting} />
            <ProductsList products={products} className={styles.productList} viewMode={viewMode} />
            <CatalogPagination countProducts={25} className={styles.pagination} />
        </div>
    );
};
