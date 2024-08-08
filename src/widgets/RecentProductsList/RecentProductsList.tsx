import { RecentProductCard } from '@/entities/product';
import ScrollContainer from 'react-indiana-drag-scroll';
import styles from './RecentProductsList.module.scss';

export const RecentProductsList = () => {
    return (
        <section className={styles.recent}>
            <div className={'container scrollable'}>
                <h2 className={'section-title-primary'}>Вы недавно смотрели</h2>
                <ScrollContainer className={styles.list}>
                    {Array.from({ length: 5 }).map((_, index) => {
                        return <RecentProductCard key={index} />;
                    })}
                </ScrollContainer>
            </div>
        </section>
    );
};
