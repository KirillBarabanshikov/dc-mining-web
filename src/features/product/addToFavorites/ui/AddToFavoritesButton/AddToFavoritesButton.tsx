import React, { FC } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { IconButton } from '@/shared/ui';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import { IProduct, toggleFavorite } from '@/entities/product';
import styles from './AddToFavoritesButton.module.scss';

interface IAddToFavoritesButton {
    product: IProduct;
    className?: string;
}

export const AddToFavoritesButton: FC<IAddToFavoritesButton> = ({ product, className }) => {
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector((state) => state.products);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
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
