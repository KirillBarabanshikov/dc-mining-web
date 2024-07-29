import React from 'react';
import { Button } from '@/shared/ui';
import clsx from 'clsx';
import bg from '@/shared/assets/images/main-bg.png';
import miner from '@/shared/assets/images/asic_miner1.png';
import styles from './MainBanner.module.scss';

export const MainBanner = () => {
    return (
        <>
            <section className={clsx(styles.banner, 'container')}>
                <div>
                    <h1>Размещение вашего оборудования в дата центре</h1>
                    <ul>
                        <li>Официальное размещение от 4,7 руб/кВт</li>
                        <li>Вооруженная охрана</li>
                        <li>Профессиональный сервис-центр</li>
                        <li>Более 1000 устройств в обслуживании</li>
                    </ul>
                    <Button className={styles.button}>Подробнее</Button>
                    <div></div>
                </div>
                <img src={`${miner}`} alt={'miner'} />
            </section>
            <img src={`${bg}`} alt={'Main banner'} className={styles.cover} />
        </>
    );
};
