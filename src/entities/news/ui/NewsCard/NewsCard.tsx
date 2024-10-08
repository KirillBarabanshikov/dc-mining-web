import { FC } from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { IMassMedia } from '@/entities/pageInfo/model';
import { formatDate, useMediaQuery } from '@/shared/lib';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import styles from './NewsCard.module.scss';

interface INewsCardProps {
    media: IMassMedia;
    className?: string;
}

export const NewsCard: FC<INewsCardProps> = ({ media, className }) => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <article className={clsx(styles.newsCard, className)}>
            <img src={BASE_URL + media.image} alt={media.title} />
            <div className={styles.cardBody}>
                <time dateTime={media.dateAt}>{formatDate(media.dateAt)}</time>
                <h5 className={styles.title}>{media.title}</h5>
                <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: media.description }} />
                <a href={media.link ? media.link : ''} target={'_blank'}>
                    <Button size={matches ? 'md' : 'lg'} className={styles.button}>
                        Подробнее
                    </Button>
                </a>
            </div>
        </article>
    );
};
