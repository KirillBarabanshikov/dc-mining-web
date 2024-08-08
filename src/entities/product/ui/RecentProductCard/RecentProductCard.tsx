import { useNavigate } from 'react-router-dom';
import img from '@/widgets/Bestsellers/img.png';
import styles from './RecentProductCard.module.scss';

export const RecentProductCard = () => {
    const navigate = useNavigate();

    return (
        <article className={styles.card} onClick={() => navigate('/product')}>
            <img src={`${img}`} alt={'Product'} />
            <div>
                <p className={styles.name}>Asic майнер Bitmain Antminer S19K PRO 115 TH/s</p>
                <p className={styles.price}>163 620 ₽</p>
            </div>
        </article>
    );
};
