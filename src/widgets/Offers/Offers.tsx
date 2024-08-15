import { CategoryCard, useGetCategoriesQuery } from '@/entities/category';
import styles from './Offers.module.scss';

export const Offers = () => {
    const { data: categories } = useGetCategoriesQuery();

    return (
        <section className={styles.offers}>
            <div className={'container-wide'}>
                <h2 className={'section-title'}>Мы предлагаем</h2>
                <div className={styles.offersList}>
                    {categories &&
                        categories
                            .filter((category) => category.display)
                            .map((category) => {
                                return <CategoryCard key={category.id} category={category} />;
                            })}
                </div>
            </div>
        </section>
    );
};
