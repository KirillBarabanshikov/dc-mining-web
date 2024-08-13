import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/ui';
import { useGetCategoryByIdQuery } from '@/entities/category';
import { Catalog } from '@/widgets/Catalog';
import styles from './CatalogPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

const CatalogPage = () => {
    const { id } = useParams();
    const { data: category } = useGetCategoryByIdQuery(id as string);

    return (
        <div className={styles.catalog}>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: category?.name ?? '', path: '' }]} />
                <div className={styles.catalogTitle}>
                    <h1>{category?.name}</h1>
                    <span>318 товаров</span>
                </div>
            </div>
            <Catalog />
        </div>
    );
};

export default CatalogPage;
