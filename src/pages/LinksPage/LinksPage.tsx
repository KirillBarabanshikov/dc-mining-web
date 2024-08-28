import { LinkCard, useGetLinksQuery } from '@/entities/link';
import { Breadcrumbs } from '@/shared/ui';
import styles from './LinksPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'Полезные ссылки', path: '/links' },
];

const LinksPage = () => {
    const { data: links } = useGetLinksQuery();

    return (
        <div className={styles.links}>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={'section-title-secondary'}>Полезные ссылки</h1>
                    <div className={styles.list}>
                        {links &&
                            links.map((link) => {
                                return <LinkCard key={link.id} link={link} />;
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LinksPage;
