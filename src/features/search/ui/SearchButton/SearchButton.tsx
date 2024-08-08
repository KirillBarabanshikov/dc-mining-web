import { FC, useState } from 'react';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { Search } from '@/features/search';
import { AnimatePresence, motion } from 'framer-motion';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import SearchIcon2 from '@/shared/assets/icons/search2.svg?react';
import styles from './SearchButton.module.scss';

interface ISearchButtonProps {
    className?: string;
}

export const SearchButton: FC<ISearchButtonProps> = ({ className }) => {
    const [isShown, setIsShown] = useState(false);

    const matchesMD = useMediaQuery(MAX_WIDTH_MD);

    return (
        <>
            <div onClick={() => setIsShown(true)} className={className}>
                {matchesMD ? <SearchIcon2 className={styles.icon} /> : <SearchIcon className={styles.icon} />}
                <span>Поиск</span>
            </div>
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.search}
                    >
                        <Search autoFocus={true} onClose={() => setIsShown(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
