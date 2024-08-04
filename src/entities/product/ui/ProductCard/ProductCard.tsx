import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Badge, Button, IconButton } from '@/shared/ui';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic2.svg?react';
import img from '@/widgets/Bestsellers/img.png';
import img2 from './img.png';
import styles from './ProductCard.module.scss';

const images = [img, img2, img, img2];

export const ProductCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    return (
        <article className={styles.productCard} onClick={() => navigate('/product')}>
            <div className={styles.image}>
                <img src={`${images[currentSlide]}`} alt={'product'} />
                <div className={styles.slides}>
                    {images.map((_, index) => {
                        return (
                            <span key={index} onMouseEnter={() => setCurrentSlide(index)} className={styles.slide} />
                        );
                    })}
                </div>
                <div className={styles.pagination}>
                    {images.map((_, index) => {
                        return (
                            <span
                                key={index}
                                className={clsx(styles.bullet, index === currentSlide && styles.active)}
                            />
                        );
                    })}
                </div>
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
                <div>Алгоритм — Scrypt</div>
                <div>Монеты — LTC/DOGE</div>
                <div>Потребление — 3420 ± 10% Вт/ч</div>
            </div>
            <div className={styles.buttons}>
                <Button size={'sm'} className={styles.button}>
                    Заказать
                </Button>
                <IconButton
                    icon={<HeartIcon />}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsFavorite(!isFavorite);
                    }}
                    className={clsx(styles.iconButton, isFavorite && styles.isFavorite)}
                />
                <IconButton
                    icon={<StatisticIcon />}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsFavorite(!isFavorite);
                    }}
                    className={clsx(styles.iconButton, isFavorite && styles.isFavorite)}
                />
            </div>
        </article>
    );
};
