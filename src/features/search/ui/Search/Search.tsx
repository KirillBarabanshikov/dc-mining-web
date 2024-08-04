import { FC, useState } from 'react';
import clsx from 'clsx';
import { Input } from '@/shared/ui';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownSearchItem } from '../DropdownSearchItem';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import styles from './Search.module.scss';

interface ISearchProps {
    autoFocus?: boolean;
    onClose?: () => void;
    className?: string;
}

export const Search: FC<ISearchProps> = ({ autoFocus = false, onClose, className }) => {
    const [searchValue, setSearchValue] = useState('');
    const [inFocus, setInFocus] = useState(false);

    const handleClose = () => {
        setInFocus(false);
        onClose && onClose();
    };

    return (
        <div className={clsx(styles.searchWrap, className)}>
            <Input
                placeholder={'Поиск'}
                onFocus={() => setInFocus(true)}
                onBlur={handleClose}
                onChange={(e) => setSearchValue(e.target.value)}
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
                        {Array.from({ length: 4 }).map((_, index) => {
                            return <DropdownSearchItem key={index} />;
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
