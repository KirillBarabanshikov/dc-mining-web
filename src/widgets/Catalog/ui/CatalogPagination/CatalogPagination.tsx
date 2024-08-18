import { FC } from 'react';
import clsx from 'clsx';
import { Button, Pagination } from '@/shared/ui';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { useSetFiltersMutation } from '@/entities/filter/api';
import { addProducts } from '@/entities/catalog/model';
import { useCatalogFilters } from '@/features/catalog';
import styles from './CatalogPagination.module.scss';

interface ICatalogPaginationProps {
    countProducts: number;
    className?: string;
}

export const CatalogPagination: FC<ICatalogPaginationProps> = ({ countProducts, className }) => {
    const [setFilters] = useSetFiltersMutation();
    const { category, products } = useAppSelector((state) => state.catalog);
    const dispatch = useAppDispatch();
    const { searchParams, getFilterBody, setSearchParams, getCurrentPage } = useCatalogFilters();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const currentPage = +(searchParams.get('page') ?? 1);
    const length = Math.ceil(countProducts / 12);

    const onSetPage = async (page: number, more: boolean) => {
        if (!category) return;

        searchParams.set('page', `${page}`);
        setSearchParams(searchParams);
        const body = getFilterBody(category.title);
        const currentPage = getCurrentPage();
        const currentProducts = products;
        await setFilters({ body, params: { page: currentPage } }).unwrap();
        if (more) {
            dispatch(addProducts(currentProducts));
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    if (length < 2) {
        return <></>;
    }

    return (
        <div className={clsx(styles.pagination, className)}>
            {currentPage < length && (
                <Button
                    variant={'outline'}
                    isWide
                    size={matches ? 'md' : 'lg'}
                    onClick={() => onSetPage(currentPage + 1, true)}
                >
                    Показать ещё
                </Button>
            )}
            {!matches && (
                <Pagination currentPage={currentPage} length={length} onChange={(page) => onSetPage(page, false)} />
            )}
        </div>
    );
};
