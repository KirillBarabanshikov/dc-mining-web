import { FC, useRef, useState } from 'react';
import clsx from 'clsx';
import { useParams, useSearchParams } from 'react-router-dom';
import { Breadcrumbs, Button, Dropdown, IconButton, Modal, Pagination, Switch } from '@/shared/ui';
import { Managers, ProductsList } from '@/widgets';
import { setViewMode, useGetProductsByCategoryIdQuery } from '@/entities/product';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { OrderCallHelpBanner } from '@/features/call';
import TileIcon from '@/shared/assets/icons/view-mode-tile.svg?react';
import SimpleIcon from '@/shared/assets/icons/view-mode-simple.svg?react';
import SimpleIcon2 from '@/shared/assets/icons/view-mode-simple2.svg?react';
import FilterIcon from '@/shared/assets/icons/filter.svg?react';
import styles from './CatalogPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

const CatalogPage = () => {
    const { id } = useParams();
    const { data: products } = useGetProductsByCategoryIdQuery(id as string);
    const { data: category } = useGetCategoryByIdQuery(id as string);
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const [currentPage, setCurrentPage] = useState(1);
    const viewMode = useAppSelector((state) => state.products.viewMode);

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: category?.name ?? '', path: '' }]} />
                <div className={styles.catalogTitle}>
                    <h1>{category?.name}</h1>
                    <span>318 товаров</span>
                </div>
                {!matches && <Receipts />}
            </div>
            <div className={styles.catalogContent}>
                {!matches ? (
                    <>
                        <Filters />
                        <div className={styles.wrap}>
                            <div className={styles.sort}>
                                <div className={styles.sortDropdown}>
                                    <span className={styles.sortLabel}>Сортировка:</span>
                                    <SortDropdown />
                                </div>
                                <ViewModeButtons viewMode={viewMode} />
                            </div>
                            <ProductsList products={products} viewMode={viewMode} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.actions}>
                            <SortDropdown />
                            <div className={styles.filtersWrap}>
                                <button className={styles.filterButton} onClick={() => setIsOpen(true)}>
                                    <FilterIcon />
                                    Фильтры
                                </button>
                                <ViewModeButtons viewMode={viewMode} />
                            </div>
                        </div>
                        <Receipts />
                        <ProductsList products={products} viewMode={viewMode} className={styles.list} />
                    </>
                )}
            </div>
            <div className={'container'}>
                <div className={styles.pagination}>
                    <Button variant={'outline'} isWide size={matches ? 'md' : 'lg'}>
                        Показать ещё
                    </Button>
                    {!matches && (
                        <Pagination currentPage={currentPage} length={40} onChange={(page) => setCurrentPage(page)} />
                    )}
                </div>
                {matches && <OrderCallHelpBanner />}
                <Managers className={styles.managers} />
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={clsx(styles.modal, 'scrollbar-hide')}>
                <Filters />
            </Modal>
        </div>
    );
};

export default CatalogPage;

const Filters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const params = useRef<Record<string, string>>({});

    const handleOnChange = ({ key, value }: { key: string; value: string[] }) => {
        if (value.length) {
            params.current[key] = value.join(',');
        } else {
            delete params.current[key];
        }
    };

    const set = () => {
        setSearchParams(params.current);
    };

    return (
        <div className={styles.filters}>
            <Dropdown
                label={'Предложения'}
                defaultValue={searchParams.get('offers') ? searchParams.get('offers')?.split(',') : ['1']}
                onChange={(value) => handleOnChange({ key: 'offers', value })}
                items={[
                    { label: 'В наличии', value: '1' },
                    { label: 'Скидка', value: '2' },
                    { label: 'Новинка', value: '3' },
                ]}
                multiply
                open
                physical
            />
            <Dropdown
                label={'Цена'}
                items={[
                    { label: 'В наличии', value: '1' },
                    { label: 'Скидка', value: '2' },
                    { label: 'Новинка', value: '3' },
                ]}
                multiply
                physical
            />
            <Dropdown
                label={'Бренд'}
                defaultValue={searchParams.get('brand') ? searchParams.get('brand')?.split(',') : undefined}
                items={[
                    { label: 'Bitmain', value: 'bitmain' },
                    { label: 'Whatsminer', value: 'whatsminer' },
                    { label: 'IceRiver', value: 'iceriver' },
                ]}
                onChange={(value) => handleOnChange({ key: 'brand', value })}
                multiply
                physical
                open={!!searchParams.get('brand')}
            />
            <Dropdown
                label={'Алгоритм'}
                items={[
                    { label: 'В наличии', value: '1' },
                    { label: 'Скидка', value: '2' },
                    { label: 'Новинка', value: '3' },
                ]}
                multiply
                physical
            />
            <div className={styles.switchWrap}>
                <div className={styles.switch}>
                    <span>Самый прибыльный</span>
                    <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
                </div>
                <div className={styles.switch}>
                    <span>Самый мощный</span>
                    <Switch isOn={isOn2} onClick={() => setIsOn2(!isOn2)} />
                </div>
            </div>
            <div className={styles.buttons}>
                <Button size={'md'} onClick={set}>
                    Применить
                </Button>
                <Button size={'md'} variant={'outline'}>
                    Сбросить
                </Button>
            </div>
            {!matches && <OrderCallHelpBanner />}
        </div>
    );
};

const Receipts = () => {
    return (
        <div className={clsx(styles.receipts, 'scrollbar-hide')}>
            <div className={clsx(styles.receipt, styles.active)}>ASIC для майнинга Bitcoin</div>
            <div className={clsx(styles.receipt)}>ASIC для майнинга LTC / DOGE</div>
            <div className={clsx(styles.receipt)}>Мощные асики</div>
            <div className={clsx(styles.receipt)}>Быстрая окупаемость</div>
            <div className={clsx(styles.receipt)}>Прибыльные асики</div>
        </div>
    );
};

const SortDropdown = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
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
            onChange={(value) => console.log(value)}
        />
    );
};

const ViewModeButtons: FC<{ viewMode: 'tile' | 'simple' }> = ({ viewMode }) => {
    const dispatch = useAppDispatch();
    const matches = useMediaQuery(MAX_WIDTH_MD);

    const setMode = (viewMode: 'tile' | 'simple') => {
        dispatch(setViewMode(viewMode));
    };

    return (
        <div className={styles.viewModeWrap}>
            <IconButton
                icon={matches ? <SimpleIcon2 /> : <SimpleIcon />}
                onClick={() => setMode('simple')}
                className={clsx(styles.iconButton, viewMode === 'simple' && styles.selected)}
            />
            <IconButton
                icon={<TileIcon />}
                onClick={() => setMode('tile')}
                className={clsx(styles.iconButton, viewMode === 'tile' && styles.selected)}
            />
        </div>
    );
};
