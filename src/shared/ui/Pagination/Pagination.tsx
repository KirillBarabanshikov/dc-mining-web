import { FC } from 'react';
import clsx from 'clsx';
import ArrowIcon from '@/shared/assets/icons/arrow-left.svg?react';
import DoubleArrowIcon from '@/shared/assets/icons/double-arrow-left.svg?react';
import styles from './Pagination.module.scss';

interface IPaginationProps {
    currentPage: number;
    length: number;
    onChange: (page: number) => void;
    className?: string;
}

export const Pagination: FC<IPaginationProps> = ({ currentPage, length, onChange, className }) => {
    const handleNext = () => {
        onChange(currentPage >= length ? currentPage : currentPage + 1);
    };

    const handlePrev = () => {
        onChange(currentPage <= 1 ? currentPage : currentPage - 1);
    };

    const handleSelectPage = (page: number) => {
        onChange(page);
    };

    const handleStart = () => {
        onChange(1);
    };

    const handleEnd = () => {
        onChange(length);
    };

    return (
        <div className={clsx(styles.pagination, className)}>
            <div className={styles.item} onClick={handleStart}>
                <DoubleArrowIcon />
            </div>
            <div onClick={handlePrev} className={styles.item}>
                <ArrowIcon />
            </div>
            {Array.from({ length })
                .slice(0, 8)
                .map((_, index) => {
                    const pageNumber =
                        currentPage <= 4
                            ? index + 1
                            : currentPage >= length - 3
                              ? length - 7 + index
                              : currentPage - 4 + index;
                    return (
                        <div
                            key={pageNumber}
                            onClick={() => handleSelectPage(pageNumber)}
                            className={clsx(styles.item, pageNumber === currentPage && styles.current)}
                        >
                            {pageNumber}
                        </div>
                    );
                })}
            <div onClick={handleNext} className={clsx(styles.item, styles.right)}>
                <ArrowIcon />
            </div>
            <div className={clsx(styles.item, styles.right)} onClick={handleEnd}>
                <DoubleArrowIcon />
            </div>
        </div>
    );
};
