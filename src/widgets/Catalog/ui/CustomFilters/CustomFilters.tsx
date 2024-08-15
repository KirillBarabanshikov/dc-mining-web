import { FC } from 'react';
import clsx from 'clsx';
import styles from './CustomFilters.module.scss';
import { useGetCustomFiltersQuery, useSetFiltersMutation } from '@/entities/filter/api/filterApi.ts';
import { useAppSelector } from '@/shared/lib';
import { useSearchParams } from 'react-router-dom';
import { CHARACTERISTICS_KEYS } from '@/shared/consts';
import { IFilterBody } from '@/entities/filter/api';

interface ICustomFiltersProps {
    className?: string;
}

export const CustomFilters: FC<ICustomFiltersProps> = ({ className }) => {
    const { data: customFilters } = useGetCustomFiltersQuery();
    const { category } = useAppSelector((state) => state.catalog);
    const [searchParams, setSearchParams] = useSearchParams();
    const [setFilters] = useSetFiltersMutation();

    const handleSelect = (value: string) => {
        if (value === searchParams.get('customFilters')) {
            searchParams.delete('customFilters', value);
        } else {
            searchParams.set('customFilters', value);
        }

        setSearchParams(searchParams);

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

        setFilters({ body: body, params: { page: currentPage } });
    };

    return (
        <div className={clsx(styles.receipts, 'scrollbar-hide', className)}>
            {customFilters &&
                customFilters
                    .filter((filter) => filter.productCategoryTitle === category?.title)
                    .map((filter) => (
                        <div
                            key={filter.id}
                            onClick={() => handleSelect(filter.title)}
                            className={clsx(
                                styles.receipt,
                                searchParams.get('customFilters') === filter.title && styles.active,
                            )}
                        >
                            {filter.title}
                        </div>
                    ))}
        </div>
    );
};
