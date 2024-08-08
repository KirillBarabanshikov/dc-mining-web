import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { IconButton } from '@/shared/ui';
import { useBodyScrollLock, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD, MAX_WIDTH_XL, TELEGRAM, WHATSAPP } from '@/shared/consts';
import { Search, SearchButton } from '@/features/search';
import Logo from '@/shared/assets/logo.svg?react';
import BurgerIcon from '@/shared/assets/icons/burger.svg?react';
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import HeartIcon2 from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic.svg?react';
import StatisticIcon2 from '@/shared/assets/icons/statistic2.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp.svg?react';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import { RootState } from '@/shared/types';
import { HorizontalMenu, MainMenu } from './components';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLocked, setIsLocked } = useBodyScrollLock();
    const location = useLocation();
    const matchesLG = useMediaQuery(MAX_WIDTH_XL);
    const matchesMD = useMediaQuery(MAX_WIDTH_MD);
    const { favorites, compare } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        setIsOpen(false);
        setIsLocked(false);
    }, [location, setIsLocked]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setIsLocked(!isLocked);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.mainMenu}>
                        <IconButton icon={<BurgerIcon />} className={styles.menuIcon} onClick={toggleMenu} />
                        <Link to={'/'} className={styles.logo}>
                            <Logo />
                        </Link>
                        {!matchesLG && <Search className={styles.search} />}
                        <div className={styles.options}>
                            {matchesLG && <SearchButton className={clsx(styles.option, styles.searchOption)} />}
                            <NavLink
                                to={'/favorites'}
                                className={({ isActive }) => clsx(styles.option, isActive && styles.active)}
                            >
                                <div className={styles.icon}>
                                    {matchesMD ? <HeartIcon2 /> : <HeartIcon />}
                                    {!!favorites.length && <div className={styles.count}>{favorites.length}</div>}
                                </div>
                                <span>Избранное</span>
                            </NavLink>
                            <NavLink
                                to={'/compare'}
                                className={({ isActive }) => clsx(styles.option, isActive && styles.active)}
                            >
                                <div className={styles.icon}>
                                    {matchesMD ? <StatisticIcon2 /> : <StatisticIcon />}
                                    {!!compare.length && <div className={styles.count}>{compare.length}</div>}
                                </div>
                                <span>Сравнить</span>
                            </NavLink>
                            <div className={styles.contacts}>
                                <a href={TELEGRAM} target={'_blank'} className={styles.option}>
                                    <div className={styles.icon}>
                                        <TelegramIcon />
                                    </div>
                                    <span>Telegram</span>
                                </a>
                                <a href={WHATSAPP} target={'_blank'} className={styles.option}>
                                    <div className={styles.icon}>
                                        <WhatsappIcon />
                                    </div>
                                    <span>Whatsapp</span>
                                </a>
                                <div className={styles.option}>
                                    <div className={styles.icon}>
                                        <PhoneIcon />
                                    </div>
                                    <span>Заказать звонок</span>
                                </div>
                            </div>
                            <MainMenu isOpen={isOpen} />
                        </div>
                    </div>
                    {!matchesMD && <HorizontalMenu />}
                </div>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.overlay}
                        onClick={toggleMenu}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
