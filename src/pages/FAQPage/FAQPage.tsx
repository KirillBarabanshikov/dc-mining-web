import { Accordion, Breadcrumbs } from '@/shared/ui';
import { useGetFaqQuery } from '@/entities/faq';
import styles from './FAQPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'FAQ', path: '/faq' },
];

const FAQPage = () => {
    const { data: faqs } = useGetFaqQuery();

    return (
        <div className={styles.faq}>
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
