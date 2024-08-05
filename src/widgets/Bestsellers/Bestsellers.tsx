import { ProductCard } from '@/entities/product';
import styles from './Bestsellers.module.scss';

export const Bestsellers = () => {
    return (
        <section className={styles.bestsellers}>
            <div className={'container'}>
                <h2 className={'section-title'}>Бестселлеры</h2>
                <div className={styles.bestsellersList}>
                    {Array.from({ length: 5 }).map((_, index) => {
                        return <ProductCard key={index} />;
                    })}
                </div>
            </div>
        </section>
    );
};
