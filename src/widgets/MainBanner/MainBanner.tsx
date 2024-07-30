import React from 'react';
import { Button } from '@/shared/ui';
import clsx from 'clsx';
import bg from '@/shared/assets/images/main-bg.png';
import miner from '@/shared/assets/images/asic_miner1.png';
import styles from './MainBanner.module.scss';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_LG } from '@/shared/consts';

export const MainBanner = () => {
    const matches = useMediaQuery(MAX_WIDTH_LG);

    return (
        <section className={clsx(styles.banner, 'container')}>
            <div className={styles.contentWrap}>
                <h1>
                    Размещение вашего оборудования <span>в дата центре</span>
                </h1>
                <ul>
                    <li>Официальное размещение от 4,7 руб/кВт</li>
                    <li>Вооруженная охрана</li>
                    <li>Профессиональный сервис-центр</li>
                    <li>Более 1000 устройств в обслуживании</li>
                </ul>
                <Button className={styles.button} size={matches ? 'md' : 'lg'}>
                    Подробнее
                </Button>
                <div></div>
            </div>
            <div className={styles.imageWrap}>
                <img src={`${miner}`} alt={'miner'} />
            </div>
            <img src={`${bg}`} alt={'Main banner'} className={styles.cover} />
        </section>
    );
};
