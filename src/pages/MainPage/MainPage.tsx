import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/shared/ui';
import { Bestsellers, MainBanner, MainBannersList, Managers, NewsList, Offers } from '@/widgets';
import Background from '@/shared/assets/backgrounds/main-bg.svg?react';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './MainPage.module.scss';
import { useGetSeosQuery } from '@/entities/seo';

const MainPage = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const { data: seos } = useGetSeosQuery();

    return (
        <>
            {seos && (
                <Helmet>
                    <title>{seos[0]?.title}</title>
                    <meta name='description' content={seos[0]?.description} />
                </Helmet>
            )}
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
