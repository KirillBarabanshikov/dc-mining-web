import { FC } from 'react';
import clsx from 'clsx';
import { IProduct, ProductCard, TProductCardViewMode } from '@/entities/product';
import styles from './ProductsList.module.scss';

interface IProductsListProps {
    viewMode?: TProductCardViewMode;
    products?: IProduct[];
    className?: string;
}

export const ProductsList: FC<IProductsListProps> = ({ viewMode = 'tile', products, className }) => {
    return (
        <div className={clsx(styles.list, styles[viewMode], className)}>
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product} viewMode={viewMode} />)}
        </div>
    );
};
