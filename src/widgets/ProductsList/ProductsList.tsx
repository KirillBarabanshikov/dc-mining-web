import { FC, memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import { IProduct, ProductCard } from '@/entities/product';
import styles from './ProductsList.module.scss';

interface IProductsListProps {
    viewMode?: 'tile' | 'simple';
    products?: IProduct[];
    className?: string;
}

export const ProductsList: FC<IProductsListProps> = memo(({ viewMode = 'tile', products, className }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className={clsx(styles.list, isClient && styles[viewMode], className)}>
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product} viewMode={viewMode} />)}
        </div>
    );
});
