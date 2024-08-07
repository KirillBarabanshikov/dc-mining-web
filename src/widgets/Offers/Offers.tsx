import { CategoryCard, useGetCategoriesQuery } from '@/entities/category';
import styles from './Offers.module.scss';
import { Fragment } from 'react';

export const Offers = () => {
    const { data: categories } = useGetCategoriesQuery();

    return (
        <section className={styles.offers}>
            <div className={'container-wide'}>
                <h2 className={'section-title'}>Мы предлагаем</h2>
                <div className={styles.offersList}>
                    {categories &&
                        categories.map((category) => {
                            if (!category.display) return <Fragment key={category.id} />;

                            return <CategoryCard key={category.id} category={category} />;
                        })}
                </div>
            </div>
        </section>
    );
};
