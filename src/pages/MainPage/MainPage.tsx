import React from 'react';
import clsx from 'clsx';
import { Bestsellers, MainBanner, Offers } from '@/widgets';
import { Advantages } from '@/widgets/Advantages';
import BackgroundIcon from '@/shared/assets/icons/backgrounds/main-bg.svg?react';
import styles from './MainPage.module.scss';
export const MainPage = () => {
    return (
        <>
            <MainBanner />
            <div className={clsx(styles.sections, 'sections')}>
                <Advantages as={'main'} />
                <Offers />
                <div className={styles.bestsellersWrapper}>
                    <Bestsellers />
                    <BackgroundIcon className={styles.backgroundIcon} />
                </div>
            </div>
        </>
    );
};
