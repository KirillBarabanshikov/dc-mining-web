import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { LinkCard, useGetLinksQuery } from '@/entities/link';
import { Breadcrumbs } from '@/shared/ui';
import styles from './LinksPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'Полезные ссылки', path: '/links' },
];

interface ILinksPageProps {
    seo?: ISeo;
}

const LinksPage: FC<ILinksPageProps> = ({ seo }) => {
    const { data: links } = useGetLinksQuery();

    return (
        <div className={styles.links}>
            <Helmet>
                <title>{seo?.title}</title>
                <meta name='description' content={seo?.description} />
            </Helmet>
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
