import { Breadcrumbs } from '@/shared/ui';
import { Managers } from '@/widgets';
import styles from './CatalogPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'ASIC майнеры', path: '/catalog' },
];

const CatalogPage = () => {
    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
                <div className={styles.catalogTitle}>
                    <h1>ASIC майнеры</h1>
                    <span>318 товаров</span>
                </div>
            </div>

            <Managers />
        </div>
    );
};

export default CatalogPage;
