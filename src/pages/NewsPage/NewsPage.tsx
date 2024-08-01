import { Breadcrumbs } from '@/shared/ui';
import { NewsList } from '@/widgets';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'СМИ о нас', path: '/news' },
];

const NewsPage = () => {
    return (
        <div>
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
