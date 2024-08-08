import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { IconButton } from '@/shared/ui';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import { RootState } from '@/shared/types';
import { IProduct, toggleFavorite } from '@/entities/product';
import styles from './AddToFavoritesButton.module.scss';

interface IAddToFavoritesButton {
    product: IProduct;
    className?: string;
}

export const AddToFavoritesButton: FC<IAddToFavoritesButton> = ({ product, className }) => {
    const dispatch = useDispatch();
    const favorites: IProduct[] = useSelector((state: RootState) => state.products.favorites);

    const onClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleFavorite(product));
    };

    const isFavorite = favorites.find((favorite) => favorite.id === product.id);

    return (
        <IconButton
            icon={<HeartIcon />}
            onClick={onClick}
            className={clsx(!!isFavorite && styles.isFavorite, className)}
        />
    );
};
