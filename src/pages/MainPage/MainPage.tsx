import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { Bestsellers, MainBanner, MainBannersList, Managers, NewsList, Offers } from '@/widgets';
import Background from '@/shared/assets/backgrounds/main-bg.svg?react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './MainPage.module.scss';

const MainPage = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <>
            <Helmet>
                <title>Оборудование для майнинга</title>
                <meta name='description' content='Приобретайте оборудование для майнинга на сайте dc-mining.ru' />
            </Helmet>
            <MainBanner />
            <div className={clsx(styles.sections, 'sections')}>
                <MainBannersList />
                <Offers />
                <div className={styles.bestsellersWrapper}>
                    <Bestsellers />
                    <Background className={styles.backgroundIcon} />
                </div>
            </div>
            <div className={styles.managers}>
                <Managers />
            </div>
            <section className={styles.news}>
                <div className={'container'}>
                    <div className={styles.titleWrap}>
                        <h2 className={'section-title'}>Новости и статьи</h2>
                        {!matches && (
                            <Button variant={'outline'} onClick={() => navigate('/news')}>
                                Все новости
                            </Button>
                        )}
                    </div>
                    <NewsList display={true} />
                    {matches && (
                        <Button size={'md'} isWide onClick={() => navigate('/news')} className={styles.button}>
                            Все новости
                        </Button>
                    )}
                </div>
            </section>
        </>
    );
};

export default MainPage;
