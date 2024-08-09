import { FC, Fragment, useState } from 'react';
import clsx from 'clsx';
import { IProduct } from '@/entities/product';
import { Button } from '@/shared/ui';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import { formatter, useMediaQuery } from '@/shared/lib';
import { AddToCompareButton, AddToFavoritesButton, OrderProductModal } from '@/features/product';
import styles from './ProductCompareCard.module.scss';

interface IProductCompareCardProps {
    product: IProduct;
    onlyDifference?: boolean;
}

export const ProductCompareCard: FC<IProductCompareCardProps> = ({ product, onlyDifference }) => {
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <AddToCompareButton product={product} variant={'trash'} className={styles.trash} />
                <img src={BASE_URL + product.images[0].image} alt={product.title} />
                <p className={styles.name}>{product.title}</p>
                <p className={styles.price}>{formatter.format(product.price)}</p>
                <div className={styles.buttons}>
                    <AddToFavoritesButton product={product} className={styles.iconButton} />
                    <Button
                        variant={matches ? 'solid' : 'outline'}
                        size={matches ? 'sm' : 'md'}
                        isWide
                        onClick={() => setIsOpen(true)}
                    >
                        Заказать
                    </Button>
                </div>
            </div>
            <div className={styles.specifications}>
                {product.value.map((value) => {
                    if (onlyDifference && !value.difference) {
                        return <Fragment key={value.id} />;
                    }

                    return (
                        <div
                            key={value.id}
                            className={clsx(styles.specification, value.difference && styles.difference)}
                        >
                            <div className={styles.title}>{value.valueInKey}</div>
                            <div className={styles.value}>
                                {value.title} {value.unitInKey}
                            </div>
                        </div>
                    );
                })}
            </div>
            <OrderProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} />
        </div>
    );
};
