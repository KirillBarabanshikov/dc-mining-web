import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Dropdown, IconButton, Modal } from '@/shared/ui';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { setViewMode } from '@/entities/product';
import { Filters } from '@/widgets/Catalog/ui';
import TileIcon from '@/shared/assets/icons/view-mode-tile.svg?react';
import SimpleIcon from '@/shared/assets/icons/view-mode-simple.svg?react';
import SimpleIcon2 from '@/shared/assets/icons/view-mode-simple2.svg?react';
import FilterIcon from '@/shared/assets/icons/filter.svg?react';
import styles from './Sorting.module.scss';

interface ISortingProps {
    className?: string;
}

export const Sorting: FC<ISortingProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { viewMode } = useAppSelector((state) => state.products);
    const [searchParams, setSearchParams] = useSearchParams();
    const matches = useMediaQuery(MAX_WIDTH_MD);

    const onChangeSort = (value: string[]) => {
        searchParams.set('order', value[0]);
        setSearchParams(searchParams);
    };

    return (
        <div className={clsx(styles.sorting, className)}>
            <div className={styles.sortDropdown}>
                <span className={styles.sortLabel}>Сортировка:</span>
                <Dropdown
                    defaultValue={[searchParams.get('order') ?? '1']}
                    items={[
                        { label: 'Сначала популярные', value: '1' },
                        { label: 'По скидке (%)', value: '2' },
                        { label: 'Сначала недорогие', value: '3' },
                        { label: 'Сначала дорогие', value: '4' },
                    ]}
                    variant={matches ? 'modal' : 'dropdown'}
                    className={styles.dropdown}
                    onChange={onChangeSort}
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
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={styles.modal}>
                <Filters onClose={() => setIsOpen(false)} />
            </Modal>
        </div>
    );
};