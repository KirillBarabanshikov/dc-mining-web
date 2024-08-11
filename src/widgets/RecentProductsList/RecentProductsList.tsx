import ScrollContainer from 'react-indiana-drag-scroll';
import { RecentProductCard } from '@/entities/product';
import { useAppSelector } from '@/shared/lib';
import styles from './RecentProductsList.module.scss';

export const RecentProductsList = () => {
    const { recent } = useAppSelector((state) => state.products);

    if (!recent.length) return <></>;

    return (
        <section className={styles.recent}>
            <div className={'container scrollable'}>
                <h2 className={'section-title-primary'}>Вы недавно смотрели</h2>
                <ScrollContainer className={styles.list}>
                    {recent.map((product) => {
                        return <RecentProductCard key={product.id} product={product} />;
                    })}
                </ScrollContainer>
            </div>
        </section>
    );
};
