import { Link } from 'react-router-dom';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import styles from './Offers.module.scss';

export const Offers = () => {
    return (
        <section className={styles.offers}>
            <div className={'container-wide'}>
                <h2 className={'section-title'}>Мы предлагаем</h2>
                <div className={styles.offersList}>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img1}`} alt={'img'} />
                        <p>ASIC майнеры</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img2}`} alt={'img'} />
                        <p>Контейнеры для майнинг ферм</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img3}`} alt={'img'} />
                        <p>Прошивки для оборудования</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img4}`} alt={'img'} />
                        <p>Комплектующие</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img5}`} alt={'img'} />
                        <p>Размещение в дата центре</p>
                    </Link>
                    <Link to={''} className={styles.offersItem}>
                        <img src={`${img6}`} alt={'img'} />
                        <p>Ремонт и сервис</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};
