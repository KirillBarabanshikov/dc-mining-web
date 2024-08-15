import React, { FC } from 'react';
import clsx from 'clsx';
import { IProduct } from '@/entities/product';
import { Badge, Button } from '@/shared/ui';
import { formatter, useMediaQuery } from '@/shared/lib';
import { AddToCompareButton, AddToFavoritesButton } from '@/features/product';
import cardStyles from '../../ProductCard.module.scss';
import styles from './ProductBodySimple.module.scss';

interface IProductBodySimpleProps {
    product: IProduct;
    onClick: (e: React.MouseEvent) => void;
}

export const ProductBodySimple: FC<IProductBodySimpleProps> = ({ product, onClick }) => {
    const matches = useMediaQuery('(max-width:565px)');

    return (
        <div className={styles.body}>
            <div className={styles.info}>
                <div className={clsx(cardStyles.tags, styles.tags)}>
                    {product.tags.map((tag) => {
                        return <Badge key={tag.id} text={tag.title} color={tag.color} />;
                    })}
                </div>
                {matches && <p className={clsx(cardStyles.price, styles.price)}>{formatter.format(product.price)}</p>}
                <p className={clsx(cardStyles.name, styles.name)}>{product.title}</p>
                <div className={clsx(cardStyles.specifications)}>
                    <div className={clsx(cardStyles.specificationsList, styles.specificationsList)}>
                        {product.value
                            .filter((value) => value.display)
                            .map((value) => {
                                return (
                                    <div key={value.id}>
                                        {value.valueInKey} — {value.title} {value.unitInKey}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <div className={styles.wrap}>
                {!matches && <p className={clsx(cardStyles.price, styles.price)}>{formatter.format(product.price)}</p>}
                <div className={clsx(cardStyles.buttons, styles.buttons)}>
                    <Button size={'sm'} className={clsx(cardStyles.button, styles.button)} onClick={onClick} isWide>
                        Заказать
                    </Button>
                    <AddToFavoritesButton
                        product={product}
                        className={clsx(cardStyles.iconButton, styles.iconButton)}
                    />
                    <AddToCompareButton product={product} className={clsx(cardStyles.iconButton, styles.iconButton)} />
                </div>
            </div>
        </div>
    );
};
