import { FC } from 'react';
import clsx from 'clsx';
import ArrowIcon from '@/shared/assets/icons/arrow-left.svg?react';
import DoubleArrowIcon from '@/shared/assets/icons/double-arrow-left.svg?react';
import styles from './Pagination.module.scss';

interface IPaginationProps {
    className?: string;
}

export const Pagination: FC<IPaginationProps> = ({ className }) => {
    return (
        <div className={clsx(styles.pagination, className)}>
            <div className={styles.item}>
                <DoubleArrowIcon />
            </div>
            <div className={styles.item}>
                <ArrowIcon />
            </div>
            {Array.from({ length: 9 }).map((_, index) => {
                return (
                    <div key={index} className={clsx(styles.item, index === 0 && styles.current)}>
                        {index + 1}
                    </div>
                );
            })}
            <div className={clsx(styles.item, styles.right)}>
                <DoubleArrowIcon />
            </div>
            <div className={clsx(styles.item, styles.right)}>
                <ArrowIcon />
            </div>
        </div>
    );
};
