import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useParams, useSearchParams } from 'react-router-dom';
import { Breadcrumbs, Button, Dropdown, IconButton, Input, Modal, Pagination, Switch } from '@/shared/ui';
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

// TODO
const CatalogPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { id } = useParams();
    const { data: products } = useGetProductsByCategoryIdQuery(id as string);
    const { data: category } = useGetCategoryByIdQuery(id as string);
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const viewMode = useAppSelector((state) => state.products.viewMode);

    const onChangePage = (page: number) => {
        searchParams.set('page', `${page}`);
        setSearchParams(searchParams);
    };

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
                        <Pagination
                            currentPage={searchParams.get('page') ? +searchParams.get('page')! : 1}
                            length={Math.ceil(100 / 25)}
                            onChange={onChangePage}
                        />
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
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const [params, setParams] = useState<Record<string, string>>({});
    const [reset, setReset] = useState(false);

    useEffect(() => {
        const param = params;
        for (const [key, value] of searchParams.entries()) {
            param[key] = value;
        }
        setParams(param);
    }, []);

    const handleOnChange = ({ key, value }: { key: string; value: string[] }) => {
        const param = params;

        if (value.length) {
            param[key] = value.join(',');
        } else {
            delete param[key];
        }
        setParams({ ...param });
    };

    const onSet = () => {
        setSearchParams(params);
        setReset(false);
    };

    const onReset = () => {
        setSearchParams({});
        setParams({});
        setReset(true);
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
                reset={reset}
            />
            <Dropdown
                label={'Цена'}
                defaultValue={searchParams.get('price') ? searchParams.get('price')?.split(',') : undefined}
                onChange={(value) => handleOnChange({ key: 'price', value })}
                items={[
                    { label: 'Менее 90 000 ₽', value: '1' },
                    { label: '90 000 - 108 000 ₽', value: '2' },
                    { label: '108 000 - 140 000 ₽', value: '3' },
                ]}
                multiply
                physical
                open={!!searchParams.get('price')}
                reset={reset}
            >
                <div className={styles.priceWrap}>
                    <Input placeholder={'от 90 000'} className={styles.input} />
                    <Input placeholder={'до 10 000 000'} className={styles.input} />
                </div>
            </Dropdown>
            <Dropdown
                label={'Бренд'}
                defaultValue={searchParams.get('brand') ? searchParams.get('brand')?.split(',') : undefined}
                onChange={(value) => handleOnChange({ key: 'brand', value })}
                items={[
                    { label: 'Bitmain', value: 'bitmain' },
                    { label: 'Whatsminer', value: 'whatsminer' },
                    { label: 'IceRiver', value: 'iceriver' },
                ]}
                multiply
                physical
                open={!!searchParams.get('brand')}
                reset={reset}
            />
            <Dropdown
                label={'Алгоритм'}
                defaultValue={searchParams.get('algorithm') ? searchParams.get('algorithm')?.split(',') : undefined}
                onChange={(value) => handleOnChange({ key: 'algorithm', value })}
                items={[
                    { label: 'SHA-256', value: '1' },
                    { label: 'Scrypt', value: '2' },
                    { label: 'X11', value: '3' },
                ]}
                multiply
                physical
                open={!!searchParams.get('algorithm')}
                reset={reset}
            />
            <div className={styles.switchWrap}>
                <div className={styles.switch}>
                    <span>Самый прибыльный</span>
                    <Switch
                        isOn={!!params['mostProfitable']}
                        onClick={() =>
                            handleOnChange({
                                key: 'mostProfitable',
                                value: params['mostProfitable'] ? [] : ['true'],
                            })
                        }
                    />
                </div>
                <div className={styles.switch}>
                    <span>Самый мощный</span>
                    <Switch
                        isOn={!!params['mostPowerful']}
                        onClick={() =>
                            handleOnChange({
                                key: 'mostPowerful',
                                value: params['mostPowerful'] ? [] : ['true'],
                            })
                        }
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <Button size={'md'} onClick={onSet}>
                    Применить
                </Button>
                <Button size={'md'} variant={'outline'} onClick={onReset}>
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
