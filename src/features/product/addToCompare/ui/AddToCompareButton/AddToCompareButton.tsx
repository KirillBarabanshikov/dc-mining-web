import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { IconButton } from '@/shared/ui';
import StatisticIcon from '@/shared/assets/icons/statistic2.svg?react';
import { RootState } from '@/shared/types';
import { IProduct, toggleCompare } from '@/entities/product';
import styles from './AddToCompareButton.module.scss';

interface IAddToCompareButton {
    product: IProduct;
    className?: string;
}

export const AddToCompareButton: FC<IAddToCompareButton> = ({ product, className }) => {
    const dispatch = useDispatch();
    const compare: number[] = useSelector((state: RootState) => state.products.compare);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(toggleCompare(product.id));
    };

    const isCompare = compare.includes(product.id);

    return (
        <IconButton
            icon={<StatisticIcon />}
            onClick={onClick}
            className={clsx(isCompare && styles.isCompare, className)}
        />
    );
};
