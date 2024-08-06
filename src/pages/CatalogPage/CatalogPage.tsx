import { useState } from 'react';
import clsx from 'clsx';
import { Breadcrumbs, Button, Dropdown, IconButton, Modal, Pagination, Switch } from '@/shared/ui';
import { Managers, ProductsList } from '@/widgets';
import { TProductCardViewMode } from '@/entities/product';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import TileIcon from '@/shared/assets/icons/view-mode-tile.svg?react';
import SimpleIcon from '@/shared/assets/icons/view-mode-simple.svg?react';
import SimpleIcon2 from '@/shared/assets/icons/view-mode-simple2.svg?react';
import FilterIcon from '@/shared/assets/icons/filter.svg?react';
import styles from './CatalogPage.module.scss';
import { OrderCallHelpBanner } from '@/features/call';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'ASIC майнеры', path: '/catalog' },
];

const CatalogPage = () => {
    const [viewMode, setViewMode] = useState<TProductCardViewMode>('tile');
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
                <div className={styles.catalogTitle}>
                    <h1>ASIC майнеры</h1>
                    <span>318 товаров</span>
                </div>
                {!matches && (
                    <div className={styles.receipts}>
                        <div className={clsx(styles.receipt, styles.active)}>ASIC для майнинга Bitcoin</div>
                        <div className={clsx(styles.receipt)}>ASIC для майнинга LTC / DOGE</div>
                        <div className={clsx(styles.receipt)}>Мощные асики</div>
                        <div className={clsx(styles.receipt)}>Быстрая окупаемость</div>
                        <div className={clsx(styles.receipt)}>Прибыльные асики</div>
                    </div>
                )}
            </div>
            <div className={styles.catalogContent}>
                {!matches ? (
                    <>
                        <div className={styles.filters}>
                            <Dropdown
                                label={'Предложения'}
                                defaultValue={'1'}
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
                                defaultValue={'1'}
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
                                defaultValue={'1'}
                                items={[
                                    { label: 'В наличии', value: '1' },
                                    { label: 'Скидка', value: '2' },
                                    { label: 'Новинка', value: '3' },
                                ]}
                                multiply
                                physical
                            />
                            <Dropdown
                                label={'Алгоритм'}
                                defaultValue={'1'}
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
                                <Button size={'md'}>Применить</Button>
                                <Button size={'md'} variant={'outline'}>
                                    Сбросить
                                </Button>
                            </div>
                            <OrderCallHelpBanner />
                        </div>
                        <div className={styles.wrap}>
                            <div className={styles.sort}>
                                <div className={styles.sortDropdown}>
                                    <span className={styles.sortLabel}>Сортировка:</span>
                                    <Dropdown
                                        defaultValue={'1'}
                                        items={[
                                            { label: 'Сначала популярные', value: '1' },
                                            { label: 'По скидке (%)', value: '2' },
                                            { label: 'Сначала недорогие', value: '3' },
                                            { label: 'Сначала дорогие', value: '4' },
                                        ]}
                                        className={styles.dropdown}
                                    />
                                </div>
                                <div className={styles.viewModeWrap}>
                                    <IconButton
                                        icon={<SimpleIcon />}
                                        onClick={() => setViewMode('simple')}
                                        className={clsx(styles.iconButton, viewMode === 'simple' && styles.selected)}
                                    />
                                    <IconButton
                                        icon={<TileIcon />}
                                        onClick={() => setViewMode('tile')}
                                        className={clsx(styles.iconButton, viewMode === 'tile' && styles.selected)}
                                    />
                                </div>
                            </div>
                            {/*<ProductsList viewMode={viewMode} />*/}
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.actions}>
                            <Dropdown
                                defaultValue={'1'}
                                items={[
                                    { label: 'Сначала популярные', value: '1' },
                                    { label: 'По скидке (%)', value: '2' },
                                    { label: 'Сначала недорогие', value: '3' },
                                    { label: 'Сначала дорогие', value: '4' },
                                ]}
                                variant={'modal'}
                            />
                            <div className={styles.filtersWrap}>
                                <button className={styles.filterButton} onClick={() => setIsOpen(true)}>
                                    <FilterIcon />
                                    Фильтры
                                </button>
                                <div className={styles.viewModeWrap}>
                                    <IconButton
                                        icon={<SimpleIcon2 />}
                                        onClick={() => setViewMode('simple')}
                                        className={clsx(styles.iconButton, viewMode === 'simple' && styles.selected)}
                                    />
                                    <IconButton
                                        icon={<TileIcon />}
                                        onClick={() => setViewMode('tile')}
                                        className={clsx(styles.iconButton, viewMode === 'tile' && styles.selected)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.receipts, 'scrollbar-hide')}>
                            <div className={clsx(styles.receipt, styles.active)}>ASIC для майнинга Bitcoin</div>
                            <div className={clsx(styles.receipt)}>ASIC для майнинга LTC / DOGE</div>
                            <div className={clsx(styles.receipt)}>Мощные асики</div>
                            <div className={clsx(styles.receipt)}>Быстрая окупаемость</div>
                            <div className={clsx(styles.receipt)}>Прибыльные асики</div>
                        </div>
                        <ProductsList viewMode={viewMode} className={styles.list} />
                    </>
                )}
            </div>
            <div className={'container'}>
                <div className={styles.pagination}>
                    <Button variant={'outline'} isWide size={matches ? 'md' : 'lg'}>
                        Показать ещё
                    </Button>
                    {!matches && <Pagination />}
                </div>
                {matches && <OrderCallHelpBanner />}
                <Managers className={styles.managers} />
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={styles.modal}>
                <div className={styles.filters}>
                    <Dropdown
                        label={'Предложения'}
                        defaultValue={'1'}
                        items={[
                            { label: 'В наличии', value: '1' },
                            { label: 'Скидка', value: '2' },
                            { label: 'Новинка', value: '3' },
                        ]}
                        multiply
                        physical
                    />
                    <Dropdown
                        label={'Цена'}
                        defaultValue={'1'}
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
                        defaultValue={'1'}
                        items={[
                            { label: 'В наличии', value: '1' },
                            { label: 'Скидка', value: '2' },
                            { label: 'Новинка', value: '3' },
                        ]}
                        multiply
                        physical
                    />
                    <Dropdown
                        label={'Алгоритм'}
                        defaultValue={'1'}
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
                        <Button size={'md'}>Применить</Button>
                        <Button size={'md'} variant={'outline'}>
                            Сбросить
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CatalogPage;
