import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Badge, Button, IconButton } from '@/shared/ui';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic2.svg?react';
import { IProduct, TProductCardViewMode } from '@/entities/product';
import { formatter, useMediaQuery } from '@/shared/lib';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import { OrderProductModal } from '@/features/product';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
    product: IProduct;
    viewMode?: TProductCardViewMode;
}

export const ProductCard: FC<IProductCardProps> = ({ product, viewMode = 'tile' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <>
            <article className={clsx(styles.productCard, styles[viewMode])} onClick={() => navigate('/product')}>
                <div className={styles.image}>
                    <img src={BASE_URL + `${product.images[currentSlide].image}`} alt={'product'} />
                    <div className={styles.slides}>
                        {product.images.map((image, index) => {
                            return (
                                <span
                                    key={image.id}
                                    onMouseEnter={() => setCurrentSlide(index)}
                                    className={styles.slide}
                                />
                            );
                        })}
                    </div>
                    <div className={styles.pagination}>
                        {product.images.slice(0, 4).map((image, index) => {
                            return (
                                <span
                                    key={image.id}
                                    className={clsx(styles.bullet, index === currentSlide && styles.active)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={clsx(styles.wrap, styles.info)}>
                        <div className={styles.tags}>
                            {product.tags.map((tag) => {
                                return <Badge key={tag.id} text={tag.title} color={tag.color} />;
                            })}
                        </div>
                        {(viewMode === 'tile' || matches) && (
                            <p className={styles.price}>{formatter.format(product.price)}</p>
                        )}
                        <p className={styles.name}>{product.title}</p>
                        <div className={styles.specifications}>
                            {product.value.map((value) => {
                                return (
                                    <div key={value.id}>
                                        {value.valueInKey} — {value.title} {value.unitInKey}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={clsx(styles.wrap, styles.buttonsWrap)}>
                        {!matches && viewMode === 'simple' && <p className={styles.price}>{product.price}</p>}
                        <div className={styles.buttons}>
                            <Button
                                size={'sm'}
                                className={styles.button}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(true);
                                }}
                            >
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
                    </div>
                </div>
            </article>
            <OrderProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
