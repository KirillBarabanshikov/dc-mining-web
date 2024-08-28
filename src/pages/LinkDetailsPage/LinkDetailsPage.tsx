import { useParams } from 'react-router-dom';
import { useGetLinkByIdQuery } from '@/entities/link';
import { Accordion, Breadcrumbs } from '@/shared/ui';
import styles from './LinkDetailsPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'Полезные ссылки', path: '/links' },
];

const LinksDetailsPage = () => {
    const { id } = useParams();
    const { data: link } = useGetLinkByIdQuery(id as string);

    if (!link) return <></>;

    return (
        <div className={styles.link}>
            <div className={'container'}>
                <Breadcrumbs paths={[...paths, { name: link.title, path: '' }]} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={'section-title-secondary'}>{link.title}</h1>
                    <div className={styles.list}>
                        {link.information.map((info) => {
                            return <Accordion key={info.id} title={info.title} body={info.description} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LinksDetailsPage;
