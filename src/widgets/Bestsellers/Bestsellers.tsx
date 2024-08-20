import { useEffect, useRef } from 'react';
import { ProductCard, useGetProductsQuery } from '@/entities/product';
import styles from './Bestsellers.module.scss';

export const Bestsellers = () => {
    const { data: products } = useGetProductsQuery({ display: true });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(() => {
            if (!ref.current) return;
            ref.current.style.height = 'initial'; // Сброс
            const rect = ref.current.getBoundingClientRect();
            ref.current.style.height = `${rect.height}px`;
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [products]);

    return (
        <section className={styles.bestsellers}>
            <div className={'container'}>
                <h2 className={'section-title'}>Бестселлеры</h2>
                <div className={styles.bestsellersList} ref={ref}>
                    {products &&
                        products.map((product) => {
                            return <ProductCard key={product.id} product={product} withInfo={false} />;
                        })}
                </div>
            </div>
        </section>
    );
};
