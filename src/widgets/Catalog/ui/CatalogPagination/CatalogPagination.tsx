import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Pagination } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './CatalogPagination.module.scss';

interface ICatalogPaginationProps {
    countProducts: number;
    className?: string;
}

export const CatalogPagination: FC<ICatalogPaginationProps> = ({ countProducts, className }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const currentPage = +(searchParams.get('page') ?? 1);
    const length = Math.ceil(countProducts / 25);

    const onSetPage = (page: number) => {
        searchParams.set('page', `${page}`);
        setSearchParams(searchParams);
    };

    if (length < 2) {
        return <></>;
    }

    return (
        <div className={clsx(styles.pagination, className)}>
            {currentPage < length && (
                <Button
                    variant={'outline'}
                    isWide
                    size={matches ? 'md' : 'lg'}
                    onClick={() => onSetPage(currentPage + 1)}
                >
                    Показать ещё
                </Button>
            )}
            {!matches && <Pagination currentPage={currentPage} length={length} onChange={onSetPage} />}
        </div>
    );
};
