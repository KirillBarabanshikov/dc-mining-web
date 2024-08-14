import React, { FC } from 'react';
import clsx from 'clsx';
import { useGetFiltersQuery, useSetFiltersMutation } from '@/entities/filter';
import { Button, Dropdown } from '@/shared/ui';
import { useSearchParams } from 'react-router-dom';
import { OrderCallHelpBanner } from '@/features/call';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import styles from './Filters.module.scss';

interface IFiltersProps {
    onClose?: () => void;
    className?: string;
}

export const Filters: FC<IFiltersProps> = ({ onClose, className }) => {
    const { data: filters } = useGetFiltersQuery();
    const [searchParams, setSearchParams] = useSearchParams();
    const [setFilters] = useSetFiltersMutation();
    const matches = useMediaQuery('(max-width: 855)');
    const { category } = useAppSelector((state) => state.catalog);

    const handleOnChange = ({ key, value }: { key: string; value: string[] }) => {
        if (value.length) {
            searchParams.set(key, value.join(','));
        } else {
            searchParams.delete(key);
        }
    };

    const handleOnChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const onSetFilters = () => {
        setSearchParams(searchParams);

        // console.log(searchParams.get('algorithm'));
        setFilters({
            type: category?.title ?? '',
            characteristics: 'algorithm=SHA-256',
            price: '',
            tags: '',
            brand: '',
        });
        onClose && onClose();
    };

    const onResetFilters = () => {
        const order = searchParams.get('order');
        setSearchParams(order ? { order } : {});
        onClose && onClose();
    };

    return (
        <div className={clsx(styles.filters, className)}>
            {filters &&
                filters
                    .filter((item) => item.category.value === category?.title)
                    .map((filter) => {
                        return (
                            <Dropdown
                                key={filter.id}
                                label={filter.characteristics.name}
                                items={filter.lists.map((item) => ({ label: item, value: item }))}
                                onChange={(value) => handleOnChange({ key: filter.characteristics.value, value })}
                                physical
                                multiply
                            >
                                {filter.start !== undefined && filter.end !== undefined && (
                                    <input
                                        type={'range'}
                                        min={filter.start}
                                        max={filter.end}
                                        onChange={handleOnChangeRange}
                                    />
                                )}
                            </Dropdown>
                        );
                    })}
            <div className={styles.buttons}>
                <Button size={'md'} onClick={onSetFilters}>
                    Применить
                </Button>
                <Button size={'md'} variant={'outline'} onClick={onResetFilters}>
                    Сбросить
                </Button>
            </div>
            {matches && <OrderCallHelpBanner />}
        </div>
    );
};
