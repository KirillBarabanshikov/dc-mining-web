import styles from './NewsList.module.scss';
import { NewsCard } from '@/entities/news';

export const NewsList = () => {
    return (
        <div className={styles.newsList}>
            {Array.from({ length: 6 }).map((_, index) => {
                return <NewsCard key={index} />;
            })}
        </div>
    );
};
