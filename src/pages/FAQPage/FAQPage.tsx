import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { Accordion, Breadcrumbs } from '@/shared/ui';
import { useGetFaqQuery } from '@/entities/faq';
import styles from './FAQPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'FAQ', path: '/faq' },
];

interface IFAQPageProps {
    seo?: ISeo;
}

const FAQPage: FC<IFAQPageProps> = ({ seo }) => {
    const { data: faqs } = useGetFaqQuery();

    return (
        <div className={styles.faq}>
            <Helmet>
                <title>{seo?.title}</title>
                <meta name='description' content={seo?.description} />
            </Helmet>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={'section-title-secondary'}>FAQ</h1>
                    <div className={styles.list}>
                        {faqs &&
                            faqs.map((faq) => {
                                return <Accordion key={faq.id} title={faq.title} body={faq.description} />;
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
