import React from 'react';
import { Link } from 'react-router-dom';
import img from './img.png';
import styles from './Offers.module.scss';

export const Offers = () => {
    return (
        <section className={styles.offers}>
            <div className={'container-wide'}>
                <h2 className={'section-title'}>Мы предлагаем</h2>
                <div className={styles.offersList}>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img}`} alt={'img'} />
                        <p>ASIC майнеры</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img}`} alt={'img'} />
                        <p>ASIC майнеры</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img}`} alt={'img'} />
                        <p>Прошивки для оборудования</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img}`} alt={'img'} />
                        <p>ASIC майнеры</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img}`} alt={'img'} />
                        <p>ASIC майнеры</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img}`} alt={'img'} />
                        <p>ASIC майнеры</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};
