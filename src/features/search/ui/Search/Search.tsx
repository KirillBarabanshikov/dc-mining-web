import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Input } from '@/shared/ui';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownSearchItem } from '../DropdownSearchItem';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import { useLazyGetProductsQuery } from '@/entities/product';
import { useDebounce } from '@/shared/lib';
import styles from './Search.module.scss';

interface ISearchProps {
    autoFocus?: boolean;
    onClose?: () => void;
    className?: string;
}

export const Search: FC<ISearchProps> = ({ autoFocus = false, onClose, className }) => {
    const [getProducts, { data: products }] = useLazyGetProductsQuery();
    const [searchValue, setSearchValue] = useState('');
    const [inFocus, setInFocus] = useState(false);

    const { debouncedFunction: getDebouncedProducts } = useDebounce((title: string) => getProducts({ title }), 250);

    const handleClose = () => {
        setInFocus(false);
        onClose && onClose();
    };

    const handleFocus = () => {
        setInFocus(true);
    };

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.trim();
        setSearchValue(searchValue);
        searchValue && getDebouncedProducts(searchValue);
    };

    return (
        <div className={clsx(styles.searchWrap, className)}>
            <Input
                placeholder={'Поиск'}
                onFocus={handleFocus}
                onBlur={handleClose}
                onChange={onChangeSearch}
                value={searchValue}
                autoFocus={autoFocus}
                icon={
                    searchValue ? (
                        <CloseIcon onClick={() => setSearchValue('')} className={styles.icon} />
                    ) : (
                        <SearchIcon className={styles.icon} />
                    )
                }
                className={clsx(styles.input)}
            />
            <AnimatePresence>
                {searchValue && inFocus && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.dropdown}
                    >
                        {products &&
                            products.map((product) => {
                                return <DropdownSearchItem key={product.id} product={product} />;
                            })}
                    </motion.div>
                )}
            </AnimatePresence>
            {createPortal(
                <AnimatePresence>
                    {inFocus && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.overlay}
                        />
                    )}
                </AnimatePresence>,
                document.getElementById('overlay') as HTMLDivElement,
            )}
        </div>
    );
};
