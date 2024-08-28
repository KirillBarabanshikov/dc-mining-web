import { ProductsList } from '@/widgets';
import { useAppSelector } from '@/shared/lib';
import { Filters, Sorting, CatalogPagination, CustomFilters } from './ui';
import styles from './Catalog.module.scss';

export const Catalog = () => {
    const { viewMode } = useAppSelector((state) => state.products);
    const { products, countProducts } = useAppSelector((state) => state.catalog);

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
