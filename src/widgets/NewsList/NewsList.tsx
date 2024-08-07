import { NewsCard } from '@/entities/news';
import { useGetAboutInfoQuery } from '@/entities/pageInfo';
import styles from './NewsList.module.scss';

export const NewsList = () => {
    const { data: info } = useGetAboutInfoQuery();

    return (
        <div className={styles.newsList}>
            {info &&
                info.massMedia.map((media) => {
                    return <NewsCard key={media.id} media={media} />;
                })}
        </div>
    );
};
