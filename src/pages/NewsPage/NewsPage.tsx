import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { Breadcrumbs } from '@/shared/ui';
import { NewsList } from '@/widgets';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'СМИ о нас', path: '/news' },
];

interface INewsPageProps {
    seo?: ISeo;
}

const NewsPage: FC<INewsPageProps> = ({ seo }) => {
    return (
        <div>
            <Helmet>
                <title>{seo?.title}</title>
                <meta name='description' content={seo?.description} />
            </Helmet>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={'section-title-secondary'}>СМИ о нас</h1>
                    <NewsList />
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
