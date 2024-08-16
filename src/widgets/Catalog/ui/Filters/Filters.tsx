import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { useGetFiltersQuery, useGetOffersQuery, useSetFiltersMutation } from '@/entities/filter';
import { Button, Dropdown, Switch } from '@/shared/ui';
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
    const [isOn, setIsOn] = useState(!!searchParams.get('profitable'));
    const [isOn2, setIsOn2] = useState(!!searchParams.get('powerful'));

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
        searchParams.delete('page');
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
        onClose && onClose();
        setReset(false);
    };

    const onResetFilters = async () => {
        const order = searchParams.get('order');
        const currentPage = searchParams.get('page') ?? '1';
        setSearchParams(order ? { order } : {});

        const body: IFilterBody = {
            type: category?.title ?? '',
        };

        console.log(searchParams.get('order'));

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

        if (searchParams.get('customFilters')) {
            body.customFilters = searchParams.get('customFilters') ?? '';
        }

        category && setFilters({ body, params: { page: currentPage } });
        onClose && onClose();
        setIsOn(false);
        setIsOn2(false);
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
                                defaultValue={searchParams.get('offers') ? searchParams.get('offers')!.split(',') : []}
                                items={tag.productTags.map((item) => ({ label: item.title, value: item.title }))}
                                onChange={(value) => handleOnChange({ key: 'offers', value })}
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
                                items={filter.lists.map((item) => ({ label: item, value: item }))}
                                onChange={(value) => handleOnChange({ key: filter.characteristics.value, value })}
                                physical
                                multiply
                                reset={reset}
                                defaultValue={
                                    searchParams.get(filter.characteristics.value)
                                        ? searchParams.get(filter.characteristics.value)!.split(',')
                                        : []
                                }
                                open={!!searchParams.get(filter.characteristics.value)}
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
            {category?.title === 'asicMiners' && (
                <div className={styles.switchWrap}>
                    <div className={styles.switch}>
                        <span>Самый прибыльный</span>
                        <Switch
                            isOn={isOn}
                            onClick={() => {
                                setIsOn((prevState) => {
                                    handleOnChange({ key: 'profitable', value: !prevState ? ['true'] : [] });
                                    return !prevState;
                                });
                            }}
                        />
                    </div>
                    <div className={styles.switch}>
                        <span>Самый мощный</span>
                        <Switch
                            isOn={isOn2}
                            onClick={() => {
                                setIsOn2((prevState) => {
                                    handleOnChange({ key: 'powerful', value: !prevState ? ['true'] : [] });
                                    return !prevState;
                                });
                            }}
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
