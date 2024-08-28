import React, { FC } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { IconButton } from '@/shared/ui';
import StatisticIcon from '@/shared/assets/icons/statistic2.svg?react';
import { IProduct, toggleCompare } from '@/entities/product';
import TrashIcon from '@/shared/assets/icons/trash.svg?react';
import styles from './AddToCompareButton.module.scss';

interface IAddToCompareButton {
    product: IProduct;
    className?: string;
    variant?: 'default' | 'trash';
}

export const AddToCompareButton: FC<IAddToCompareButton> = ({ product, variant = 'default', className }) => {
    const dispatch = useAppDispatch();
    const { compare } = useAppSelector((state) => state.products);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(toggleCompare(product.id));
    };

    const isCompare = compare.includes(product.id);

    if (variant === 'trash') {
        return (
            <div className={clsx(styles.trashIcon, className)} onClick={onClick}>
                <TrashIcon />
            </div>
        );
    }

    return (
        <IconButton
            icon={<StatisticIcon />}
            onClick={onClick}
            className={clsx(isCompare && styles.isCompare, className)}
        />
    );
};
