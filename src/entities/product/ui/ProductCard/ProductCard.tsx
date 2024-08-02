import img from '@/widgets/Bestsellers/img.png';
import { Badge, Button, IconButton } from '@/shared/ui';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic2.svg?react';
import styles from './ProductCard.module.scss';

export const ProductCard = () => {
    return (
        <article className={styles.productCard}>
            <div className={styles.image}>
                <img src={`${img}`} alt={'product'} />
            </div>
            <div className={styles.tags}>
                <Badge text={'В наличии'} theme={'green'} />
                <Badge text={'Скидка — 15% '} theme={'red'} />
                <Badge text={'Новинка'} theme={'blue'} />
            </div>
            <p className={styles.price}>545 000 ₽</p>
            <p className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</p>
            <div className={styles.specifications}>
                <div>Хэшрейт — 9500 MH/s</div>
                <div>Хэшрейт — 9500 MH/s</div>
                <div>Хэшрейт — 9500 MH/s</div>
                <div>Хэшрейт — 9500 MH/s</div>
            </div>
            <div className={styles.buttons}>
                <Button size={'sm'} className={styles.button}>
                    Заказать
                </Button>
                <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
            </div>
        </article>
    );
};
