import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { IProduct, RecentProductCard } from '@/entities/product';
import { RootState } from '@/shared/types';
import styles from './RecentProductsList.module.scss';

export const RecentProductsList = () => {
    const recentProducts: IProduct[] = useSelector((state: RootState) => state.products.recent);

    if (!recentProducts.length) return <></>;

    return (
        <section className={styles.recent}>
            <div className={'container scrollable'}>
                <h2 className={'section-title-primary'}>Вы недавно смотрели</h2>
                <ScrollContainer className={styles.list}>
                    {recentProducts.map((product) => {
                        return <RecentProductCard key={product.id} product={product} />;
                    })}
                </ScrollContainer>
            </div>
        </section>
    );
};
