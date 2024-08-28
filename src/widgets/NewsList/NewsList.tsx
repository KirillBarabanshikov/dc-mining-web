import { FC } from 'react';
import { NewsCard } from '@/entities/news';
import { useGetAboutInfoQuery } from '@/entities/pageInfo';
import styles from './NewsList.module.scss';

interface INewsListProps {
    display?: boolean;
}

export const NewsList: FC<INewsListProps> = ({ display = false }) => {
    const { data: info } = useGetAboutInfoQuery();

    return (
        <div className={styles.newsList}>
            {info &&
                info.massMedia
                    .filter((media) => (display ? media.display : media))
                    .map((media) => {
                        return <NewsCard key={media.id} media={media} />;
                    })}
        </div>
    );
};
