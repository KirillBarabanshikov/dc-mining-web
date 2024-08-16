import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Pagination } from '@/shared/ui';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { CHARACTERISTICS_KEYS, MAX_WIDTH_MD } from '@/shared/consts';
import styles from './CatalogPagination.module.scss';
import { IFilterBody, useSetFiltersMutation } from '@/entities/filter/api';
import { setProducts } from '@/entities/catalog/model';

interface ICatalogPaginationProps {
    countProducts: number;
    className?: string;
}

export const CatalogPagination: FC<ICatalogPaginationProps> = ({ countProducts, className }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const currentPage = +(searchParams.get('page') ?? 1);
    const length = Math.ceil(countProducts / 12);
    const { category, products } = useAppSelector((state) => state.catalog);
    const [setFilters] = useSetFiltersMutation();
    const dispatch = useAppDispatch();

    const onSetPage = async (page: number, more: boolean) => {
        // const scrollPosition = window.scrollY;
        const currentProducts = products;
        searchParams.set('page', `${page}`);
        setSearchParams(searchParams);

        if (!more) {
            window.scrollTo(0, 0);
        }

        const characteristics: string[] = [];
        const currentPage = page;

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

        await setFilters({ body: body, params: { page: `${currentPage}` } }).unwrap();
        if (more) {
            dispatch(setProducts(currentProducts));
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
