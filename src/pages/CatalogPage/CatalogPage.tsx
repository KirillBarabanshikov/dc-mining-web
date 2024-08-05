import { useState } from 'react';
import clsx from 'clsx';
import { Breadcrumbs, Button, Dropdown, IconButton, Pagination, Switch } from '@/shared/ui';
import { Managers, ProductsList } from '@/widgets';
import { TProductCardViewMode } from '@/entities/product';
import TileIcon from '@/shared/assets/icons/view-mode-tile.svg?react';
import SimpleIcon from '@/shared/assets/icons/view-mode-simple.svg?react';
import styles from './CatalogPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'ASIC майнеры', path: '/catalog' },
];

const CatalogPage = () => {
    const [viewMode, setViewMode] = useState<TProductCardViewMode>('tile');
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
                <div className={styles.catalogTitle}>
                    <h1>ASIC майнеры</h1>
                    <span>318 товаров</span>
                </div>
                <div className={styles.receipts}>
                    <div className={clsx(styles.receipt, styles.active)}>ASIC для майнинга Bitcoin</div>
                    <div className={clsx(styles.receipt)}>ASIC для майнинга LTC / DOGE</div>
                    <div className={clsx(styles.receipt)}>Мощные асики</div>
                    <div className={clsx(styles.receipt)}>Быстрая окупаемость</div>
                    <div className={clsx(styles.receipt)}>Прибыльные асики</div>
                </div>
                <div className={styles.catalogContent}>
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
                        <ProductsList viewMode={viewMode} />
                    </div>
                </div>
                <div className={styles.pagination}>
                    <Button variant={'outline'} isWide>
                        Показать ещё
                    </Button>
                    <Pagination />
                </div>
            </div>

            <Managers className={styles.managers} />
        </div>
    );
};

export default CatalogPage;
