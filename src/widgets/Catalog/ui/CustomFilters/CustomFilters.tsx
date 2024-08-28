import { FC } from 'react';
import clsx from 'clsx';
import { useGetCustomFiltersQuery, useSetFiltersMutation } from '@/entities/filter/api/filterApi.ts';
import { useAppSelector } from '@/shared/lib';
import { useCatalogFilters } from '@/features/catalog';
import styles from './CustomFilters.module.scss';

interface ICustomFiltersProps {
    className?: string;
}

export const CustomFilters: FC<ICustomFiltersProps> = ({ className }) => {
    const { data: customFilters } = useGetCustomFiltersQuery();
    const { category } = useAppSelector((state) => state.catalog);
    const [setFilters] = useSetFiltersMutation();
    const { setParams, searchParams, getFilterBody, setSearchParams } = useCatalogFilters();

    const handleSelect = (value: string) => {
        if (!category) return;

        if (searchParams.get('filter') === value) {
            setParams({ key: 'filter', value: [] });
        } else {
            setParams({ key: 'filter', value: [value] });
        }
        searchParams.delete('page');
        setSearchParams(searchParams);

        const body = getFilterBody(category.title);

        setFilters({ body: body, params: { page: '1' } });
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
                                searchParams.get('filter') === filter.title && styles.active,
                            )}
                        >
                            {filter.title}
                        </div>
                    ))}
        </div>
    );
};
