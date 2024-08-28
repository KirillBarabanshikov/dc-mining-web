import { FC, useState } from 'react';
import clsx from 'clsx';
import { useGetFiltersQuery, useGetOffersQuery, useSetFiltersMutation } from '@/entities/filter';
import { Button, Dropdown, Range, Switch } from '@/shared/ui';
import { OrderCallHelpBanner } from '@/features/call';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import { useCatalogFilters } from '@/features/catalog';
import styles from './Filters.module.scss';

interface IFiltersProps {
    onClose?: () => void;
    className?: string;
}

export const Filters: FC<IFiltersProps> = ({ onClose, className }) => {
    const [reset, setReset] = useState(false);
    const { data: filters } = useGetFiltersQuery();
    const { data: offers } = useGetOffersQuery();
    const [setFilters] = useSetFiltersMutation();
    const { category } = useAppSelector((state) => state.catalog);
    const matches = useMediaQuery('(max-width: 855px)');
    const { getFilterBody, setParams, searchParams, setSearchParams, resetFilters } = useCatalogFilters();

    const onSetFilters = () => {
        if (!category) return;

        searchParams.delete('page');
        setSearchParams(searchParams);
        const body = getFilterBody(category.title);
        setFilters({ body, params: { page: '1' } });
        onClose && onClose();
    };

    const onResetFilters = () => {
        if (!category) return;
        resetFilters();
        const body = getFilterBody(category.title);
        setFilters({ body, params: { page: '1' } });
        onClose && onClose();
        setReset((prev) => !prev);
    };

    return (
        <div className={clsx(styles.filters, className)}>
            {offers &&
                offers
                    .filter((offer) => offer.category === category?.name)
                    .map((tag) => {
                        return (
                            <Dropdown
                                key={tag.id}
                                label={'Предложения'}
                                defaultValue={searchParams.get('offers') ? searchParams.get('offers')!.split(',') : []}
                                items={tag.productTags.map((item) => ({ label: item.title, value: item.title }))}
                                onChange={(value) => setParams({ key: 'offers', value })}
                                physical
                                multiply
                                reset={reset}
                                open={!!searchParams.get('offers')}
                            />
                        );
                    })}
            {filters &&
                filters
                    .filter((item) => item.category.value === category?.title)
                    .map((filter) => {
                        return (
                            <Dropdown
                                key={filter.id}
                                label={filter.characteristics.name}
                                defaultValue={
                                    searchParams.get(filter.characteristics.value)
                                        ? searchParams.get(filter.characteristics.value)!.split(',')
                                        : []
                                }
                                items={filter.lists.map((item) => ({ label: item, value: item }))}
                                onChange={(value) => setParams({ key: filter.characteristics.value, value })}
                                physical
                                multiply
                                reset={reset}
                                open={!!searchParams.get(filter.characteristics.value)}
                            >
                                {filter.start != undefined && filter.end != undefined && (
                                    <Range
                                        min={filter.start}
                                        max={filter.end}
                                        onChange={(values) =>
                                            setParams({
                                                key: filter.characteristics.value,
                                                value: [`${values[0]}`, `${values[1]}`],
                                            })
                                        }
                                    />
                                )}
                            </Dropdown>
                        );
                    })}
            {category?.title === 'asicMiners' && (
                <div className={styles.switchWrap}>
                    <div className={styles.switch}>
                        <span>Самый прибыльный</span>
                        <Switch
                            isOn={searchParams.has('profitable')}
                            onClick={(value) => setParams({ key: 'profitable', value: value ? ['true'] : [] })}
                            reset={reset}
                        />
                    </div>
                    <div className={styles.switch}>
                        <span>Самый мощный</span>
                        <Switch
                            isOn={searchParams.has('powerful')}
                            onClick={(value) => setParams({ key: 'powerful', value: value ? ['true'] : [] })}
                            reset={reset}
                        />
                    </div>
                </div>
            )}
            <div className={styles.buttons}>
                <Button size={'md'} onClick={onSetFilters}>
                    Применить
                </Button>
                <Button size={'md'} variant={'outline'} onClick={onResetFilters}>
                    Сбросить
                </Button>
            </div>
            {!matches && <OrderCallHelpBanner />}
        </div>
    );
};
