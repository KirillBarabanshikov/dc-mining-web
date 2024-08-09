import { FC } from 'react';
import clsx from 'clsx';
import { TProductCardViewMode } from '@/entities/product';
import styles from './ProductsList.module.scss';

interface IProductsListProps {
    viewMode?: TProductCardViewMode;
    className?: string;
}

export const ProductsList: FC<IProductsListProps> = ({ viewMode = 'tile', className }) => {
    return (
        <div className={clsx(styles.list, styles[viewMode], className)}>
            {/*{Array.from({ length: 12 }).map((_, index) => {*/}
            {/*    return <ProductCard key={index} viewMode={viewMode as TProductCardViewMode} />;*/}
            {/*})}*/}
        </div>
    );
};
