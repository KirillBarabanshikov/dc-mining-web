import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Badge, Button } from '@/shared/ui';
import { IProduct, TProductCardViewMode } from '@/entities/product';
import { formatter, useMediaQuery } from '@/shared/lib';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import { AddToCompareButton, AddToFavoritesButton, OrderProductModal } from '@/features/product';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
    product: IProduct;
    viewMode?: TProductCardViewMode;
}

export const ProductCard: FC<IProductCardProps> = ({ product, viewMode = 'tile' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <>
            <Link to={`/product/${product.id}/${product.slug}`}>
                <article className={clsx(styles.productCard, styles[viewMode])}>
                    <ProductCardImage product={product} />
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
                                {product.value.slice(0, 4).map((value) => {
                                    return (
                                        <div key={value.id}>
                                            {value.valueInKey} — {value.title} {value.unitInKey}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={clsx(styles.wrap, styles.buttonsWrap)}>
                            {!matches && viewMode === 'simple' && (
                                <p className={styles.price}>{formatter.format(product.price)}</p>
                            )}
                            <div className={styles.buttons}>
                                <Button
                                    size={'sm'}
                                    className={styles.button}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(true);
                                    }}
                                >
                                    Заказать
                                </Button>
                                <AddToFavoritesButton product={product} className={styles.iconButton} />
                                <AddToCompareButton product={product} className={styles.iconButton} />
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
            <OrderProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} />
        </>
    );
};

interface IProductCardImageProps {
    product: IProduct;
}

const ProductCardImage: FC<IProductCardImageProps> = ({ product }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className={styles.image} onMouseLeave={() => setCurrentSlide(0)}>
            <img src={BASE_URL + `${product.images[currentSlide]?.image}`} alt={'product'} />
            <div className={styles.slides}>
                {product.images.length >= 2 &&
                    product.images.slice(0, 4).map((image, index) => {
                        return (
                            <span key={image.id} onMouseEnter={() => setCurrentSlide(index)} className={styles.slide} />
                        );
                    })}
            </div>
            <div className={styles.pagination}>
                {product.images.length >= 2 &&
                    product.images.slice(0, 4).map((image, index) => {
                        return (
                            <span
                                key={image.id}
                                className={clsx(styles.bullet, index === currentSlide && styles.active)}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
