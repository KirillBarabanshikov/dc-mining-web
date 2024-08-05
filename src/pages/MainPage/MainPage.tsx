import clsx from 'clsx';
import { Bestsellers, MainBanner, Managers, Offers } from '@/widgets';
import { Advantages } from '@/widgets/Advantages';
import Background from '@/shared/assets/backgrounds/main-bg.svg?react';
import styles from './MainPage.module.scss';
const MainPage = () => {
    return (
        <>
            <MainBanner />
            <div className={clsx(styles.sections, 'sections')}>
                <Advantages as={'main'} />
                <Offers />
                <div className={styles.bestsellersWrapper}>
                    <Bestsellers />
                    <Background className={styles.backgroundIcon} />
                </div>
            </div>
            <div className={'container'}>
                <Managers />
            </div>
        </>
    );
};

export default MainPage;
