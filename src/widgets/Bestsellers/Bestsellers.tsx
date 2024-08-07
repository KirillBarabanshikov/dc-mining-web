import { ProductCard, useGetProductsQuery } from '@/entities/product';
import styles from './Bestsellers.module.scss';

export const Bestsellers = () => {
    const { data: products } = useGetProductsQuery({ display: true });

    return (
        <section className={styles.bestsellers}>
            <div className={'container'}>
                <h2 className={'section-title'}>Бестселлеры</h2>
                <div className={styles.bestsellersList}>
                    {products &&
                        products.map((product) => {
                            return <ProductCard key={product.id} product={product} />;
                        })}
                </div>
            </div>
        </section>
    );
};
