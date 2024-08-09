import { FC, useState } from 'react';
import { IProduct } from '@/entities/product';
import { Badge, Button, IconButton } from '@/shared/ui';
import { formatter } from '@/shared/lib';
import { AddToCompareButton, AddToFavoritesButton, OrderProductModal } from '@/features/product';
import ShareIcon from '@/shared/assets/icons/share.svg?react';
import styles from './ProductInfo.module.scss';

interface IProductInfoProps {
    product: IProduct;
}

export const ProductInfo: FC<IProductInfoProps> = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.info}>
            {!!product.tags.length && (
                <div className={styles.tags}>
                    {product.tags.map((tag) => {
                        return <Badge key={tag.id} text={tag.title} color={tag.color} />;
                    })}
                </div>
            )}
            <div className={styles.content}>
                <h1>{product.title}</h1>
                <div className={styles.specifications}>
                    {product.value
                        .filter((value) => value.display)
                        .map((value) => {
                            return (
                                <div key={value.id} className={styles.specification}>
                                    <p className={styles.name}>{value.valueInKey}</p>
                                    <p className={styles.value}>
                                        {value.title} {value.unitInKey}
                                    </p>
                                </div>
                            );
                        })}
                </div>
                <div>
                    <p className={styles.description} dangerouslySetInnerHTML={{ __html: product.shortDescription }} />
                    <span className={styles.more}>Подробнее</span>
                </div>
                <div>
                    {!!product.oldPrice && (
                        <span className={styles.oldPrice}>{formatter.format(product.oldPrice)}</span>
                    )}
                    <p className={styles.price}>{formatter.format(product.price)}</p>
                </div>
                <div className={styles.buttons}>
                    <Button size={'sm'} className={styles.button} onClick={() => setIsOpen(true)}>
                        Заказать
                    </Button>
                    <AddToFavoritesButton product={product} className={styles.iconButton} />
                    <AddToCompareButton product={product} className={styles.iconButton} />
                    <IconButton icon={<ShareIcon />} className={styles.iconButton} />
                </div>
            </div>
            <OrderProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} />
        </section>
    );
};
