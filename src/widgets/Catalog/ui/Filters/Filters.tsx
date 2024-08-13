import { FC } from 'react';
import clsx from 'clsx';
import { useGetFiltersQuery } from '@/entities/filter';
import { Button, Dropdown } from '@/shared/ui';
import { useSearchParams } from 'react-router-dom';
import { OrderCallHelpBanner } from '@/features/call';
import styles from './Filters.module.scss';

interface IFiltersProps {
    className?: string;
}

export const Filters: FC<IFiltersProps> = ({ className }) => {
    const { data: filters } = useGetFiltersQuery();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleOnChange = ({ key, value }: { key: string; value: string[] }) => {
        if (value.length) {
            searchParams.set(key, value.join(','));
        } else {
            searchParams.delete(key);
        }
    };

    const onSetFilters = () => {
        setSearchParams(searchParams);
    };

    const onResetFilters = () => {
        const order = searchParams.get('order');
        setSearchParams(order ? { order } : {});
    };

    return (
        <div className={clsx(styles.filters, className)}>
            {filters &&
                filters.map((filter) => {
                    return (
                        <Dropdown
                            key={filter.id}
                            label={filter.characteristics.name}
                            items={filter.lists.map((item) => ({ label: item, value: item }))}
                            onChange={(value) => handleOnChange({ key: filter.characteristics.value, value })}
                            physical
                            multiply
                        />
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
            <OrderCallHelpBanner />
        </div>
    );
};
