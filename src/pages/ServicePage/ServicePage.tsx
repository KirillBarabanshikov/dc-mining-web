import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { SendRequestForm } from '@/features/service';
import styles from './ServicePage.module.scss';

interface IServicePageProps {
    seo?: ISeo;
}

const ServicePage: FC<IServicePageProps> = ({ seo }) => {
    return (
        <div className={styles.service}>
            <Helmet>
                <title>{seo?.title}</title>
                <meta name='description' content={seo?.description} />
            </Helmet>
            <div className={'container-wide'}>
                <section className={styles.body}>
                    <h1 className={'section-title'}>Ремонт и сервис</h1>
                    <p className={styles.subtitle}>Опишите характер проблемы и наши специалисты помогут вам</p>
                    <SendRequestForm />
                </section>
                <div className={styles.background} />
            </div>
        </div>
    );
};

export default ServicePage;
