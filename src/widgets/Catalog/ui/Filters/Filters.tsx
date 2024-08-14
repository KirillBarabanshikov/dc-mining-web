import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { useGetFiltersQuery, useGetOffersQuery, useSetFiltersMutation } from '@/entities/filter';
import { Button, Dropdown } from '@/shared/ui';
import { useSearchParams } from 'react-router-dom';
import { OrderCallHelpBanner } from '@/features/call';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import { CHARACTERISTICS_KEYS } from '@/shared/consts';
import styles from './Filters.module.scss';
import { IFilterBody } from '@/entities/filter/api';

interface IFiltersProps {
    onClose?: () => void;
    className?: string;
}

export const Filters: FC<IFiltersProps> = ({ onClose, className }) => {
    const { data: filters } = useGetFiltersQuery();
    const { data: offers } = useGetOffersQuery();
    const [searchParams, setSearchParams] = useSearchParams();
    const [setFilters] = useSetFiltersMutation();
    const matches = useMediaQuery('(max-width: 855px)');
    const { category } = useAppSelector((state) => state.catalog);
    const [reset, setReset] = useState(false);

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

        setFilters({ body: body, params: { page: currentPage, limit: '25' } });
        onClose && onClose();
        setReset(false);
    };

    const onResetFilters = async () => {
        const order = searchParams.get('order');
        const currentPage = searchParams.get('page') ?? '1';
        setSearchParams(order ? { order } : {});
        category && setFilters({ body: { type: category.title }, params: { page: currentPage, limit: '25' } });
        onClose && onClose();
        setReset(true);
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
                                items={tag.productTags.map((item) => ({ label: item.title, value: item.title }))}
                                onChange={(value) => handleOnChange({ key: 'offers', value })}
                                physical
                                multiply
                                reset={reset}
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
                                items={filter.lists.map((item) => ({ label: item, value: item }))}
                                onChange={(value) => handleOnChange({ key: filter.characteristics.value, value })}
                                physical
                                multiply
                                reset={reset}
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
            {!matches && <OrderCallHelpBanner />}
        </div>
    );
};
