import { Breadcrumbs } from '@/shared/ui';
import styles from './NewsDetailsPage.module.scss';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'СМИ о нас', path: '/news' },
];

const NewsDetailsPage = () => {
    return (
        <>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={styles.title}>
                        Новая эра майнинга: Проект Fractal Bitcoin и перспективы для майнеров
                    </h1>
                    <img src={''} alt={''} />
                    <div dangerouslySetInnerHTML={{ __html: '<div>123</div>' }}></div>
                </div>
            </section>
        </>
    );
};

export default NewsDetailsPage;
