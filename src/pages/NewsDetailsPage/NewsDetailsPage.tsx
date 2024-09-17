import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { Breadcrumbs } from '@/shared/ui';
import { useParams } from 'react-router-dom';
import { useGetAboutMassMediaInfoQuery } from '@/entities/pageInfo';
import { BASE_URL } from '@/shared/consts';
import styles from './NewsDetailsPage.module.scss';
import clsx from 'clsx';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'СМИ о нас', path: '/news' },
];

interface INewsPageProps {
    seo?: ISeo;
}

const NewsDetailsPage: FC<INewsPageProps> = () => {
    const { id } = useParams();
    const { data: massMedia } = useGetAboutMassMediaInfoQuery(id as string);

    if (!massMedia) return;

    return (
        <div className={styles.newsPage}>
            <Helmet>
                <title>{massMedia.title}</title>
            </Helmet>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: massMedia.title }]} />
            </div>
            <section>
                <div className={clsx(styles.container, 'container')}>
                    <h1 className={styles.title}>{massMedia.title}</h1>
                    <img src={BASE_URL + massMedia.image} alt={massMedia.title} className={styles.image} />
                    <div dangerouslySetInnerHTML={{ __html: massMedia.description }} className={styles.description} />
                </div>
            </section>
        </div>
    );
};

export default NewsDetailsPage;
