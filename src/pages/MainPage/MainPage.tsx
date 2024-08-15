import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { Bestsellers, MainBanner, Managers, NewsList, Offers } from '@/widgets';
import Background from '@/shared/assets/backgrounds/main-bg.svg?react';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <MainBanner />
            <div className={clsx(styles.sections, 'sections')}>
                {/*<Advantages />*/}
                <Offers />
                <div className={styles.bestsellersWrapper}>
                    <Bestsellers />
                    <Background className={styles.backgroundIcon} />
                </div>
                <Managers />
                <section className={styles.news}>
                    <div className={'container'}>
                        <div className={styles.titleWrap}>
                            <h2 className={'section-title'}>Новости и статьи</h2>
                            <Button variant={'outline'} onClick={() => navigate('/news')}>
                                Все новости
                            </Button>
                        </div>
                        <NewsList />
                    </div>
                </section>
            </div>
        </>
    );
};

export default MainPage;
