import { FC } from 'react';
import clsx from 'clsx';
import newsImg from '@/shared/assets/images/news/news.png';
import styles from './NewsCard.module.scss';

interface INewsCardProps {
    className?: string;
}

export const NewsCard: FC<INewsCardProps> = ({ className }) => {
    return (
        <article className={clsx(styles.newsCard, className)}>
            <img src={`${newsImg}`} alt={'News'} />
            <div className={styles.cardBody}>
                <time dateTime={''}>31 мая 2024</time>
                <h5 className={styles.title}>«Обречена на популярность»: перспективы технологии майнинга</h5>
                <p className={styles.subtitle}>
                    Россия может подняться в рейтинге стран по майнингу криптовалют, когда будет принят соответствующий
                    закон об отраслевом регулировании. Основатель о том, что сдерживает рост российского рынка, и
                    продуктах компании.
                </p>
            </div>
        </article>
    );
};
