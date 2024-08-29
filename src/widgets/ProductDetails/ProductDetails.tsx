import { FC } from 'react';
import { IProduct } from '@/entities/product';
import { ProductSlider, ProductInfo, ProductsTabs } from './ui';
import styles from './ProductDetails.module.scss';

interface IProductDetailsProps {
    product?: IProduct;
    isFetching: boolean;
}

export const ProductDetails: FC<IProductDetailsProps> = ({ product, isFetching }) => {
    return (
        product &&
        !isFetching && (
            <div className={styles.details}>
                <div className={styles.info}>
                    <ProductSlider images={product.images} />
                    <ProductInfo product={product} />
                </div>
                <ProductsTabs product={product} />
            </div>
        )
    );
};
