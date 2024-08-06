import clsx from 'clsx';
import Background from '@/shared/assets/backgrounds/main-banner-bg.svg?react';
import { MainSlider } from '@/entities/mainSlider';
import styles from './MainBanner.module.scss';

export const MainBanner = () => {
    return (
        <>
            <div className={clsx(styles.banner, 'main-banner')}>
                <MainSlider />
                <div className='swiper-pagination'></div>
            </div>
            <Background className={styles.bg} />
        </>
    );
};
