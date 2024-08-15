import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Dropdown, IconButton, Modal } from '@/shared/ui';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { CHARACTERISTICS_KEYS, MAX_WIDTH_MD } from '@/shared/consts';
import { setViewMode } from '@/entities/product';
import { Filters } from '@/widgets/Catalog/ui';
import TileIcon from '@/shared/assets/icons/view-mode-tile.svg?react';
import SimpleIcon from '@/shared/assets/icons/view-mode-simple.svg?react';
import SimpleIcon2 from '@/shared/assets/icons/view-mode-simple2.svg?react';
import FilterIcon from '@/shared/assets/icons/filter.svg?react';
import styles from './Sorting.module.scss';
import { IFilterBody, useSetFiltersMutation } from '@/entities/filter/api';

interface ISortingProps {
    className?: string;
}

export const Sorting: FC<ISortingProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { viewMode } = useAppSelector((state) => state.products);
    const [searchParams, setSearchParams] = useSearchParams();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const [setFilters] = useSetFiltersMutation();
    const { category } = useAppSelector((state) => state.catalog);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        setReset((prev) => !prev);
    }, [category]);

    const onChangeSort = (value: string[]) => {
        searchParams.set('order', value[0]);
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

        setFilters({ body: body, params: { page: currentPage, limit: '25' } });
    };

    return (
        <div className={clsx(styles.sorting, className)}>
            <div className={styles.sortDropdown}>
                <span className={styles.sortLabel}>Сортировка:</span>
                <Dropdown
                    defaultValue={['1']}
                    items={[
                        { label: 'Сначала популярные', value: '1' },
                        { label: 'По скидке (%)', value: '2' },
                        { label: 'Сначала недорогие', value: '3' },
                        { label: 'Сначала дорогие', value: '4' },
                    ]}
                    variant={matches ? 'modal' : 'dropdown'}
                    className={styles.dropdown}
                    onChange={onChangeSort}
                    reset={reset}
                />
            </div>
            <div className={styles.buttonsWrap}>
                <button className={styles.filterButton} onClick={() => setIsOpen(true)}>
                    <FilterIcon />
                    Фильтры
                </button>
                <div className={styles.viewModeWrap}>
                    <IconButton
                        icon={matches ? <SimpleIcon2 /> : <SimpleIcon />}
                        onClick={() => dispatch(setViewMode('simple'))}
                        className={clsx(styles.iconButton, viewMode === 'simple' && styles.selected)}
                    />
                    <IconButton
                        icon={<TileIcon />}
                        onClick={() => dispatch(setViewMode('tile'))}
                        className={clsx(styles.iconButton, viewMode === 'tile' && styles.selected)}
                    />
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={clsx(styles.modal, 'scrollbar-hide')}>
                <Filters onClose={() => setIsOpen(false)} />
            </Modal>
        </div>
    );
};
