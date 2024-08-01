import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IconButton, Input } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD, MAX_WIDTH_XL, TELEGRAM, WHATSAPP } from '@/shared/consts';
import { HorizontalMenu, MainMenu } from './components';
import Logo from '@/shared/assets/logo.svg?react';
import BurgerIcon from '@/shared/assets/icons/burger.svg?react';
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import HeartIcon2 from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic.svg?react';
import StatisticIcon2 from '@/shared/assets/icons/statistic2.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp.svg?react';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import SearchIcon2 from '@/shared/assets/icons/search2.svg?react';
import styles from './Header.module.scss';
import clsx from 'clsx';

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const matchesLG = useMediaQuery(MAX_WIDTH_XL);
    const matchesMD = useMediaQuery(MAX_WIDTH_MD);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.mainMenu}>
                        <IconButton
                            icon={<BurgerIcon />}
                            className={styles.menuIcon}
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                        <Link to={'/'} className={styles.logo}>
                            <Logo />
                        </Link>
                        {!matchesLG && <Input type={'search'} placeholder={'Поиск'} className={styles.search} />}
                        <div className={styles.options}>
                            {matchesLG && (
                                <div className={styles.option}>
                                    {matchesMD ? <SearchIcon2 /> : <SearchIcon />}
                                    <span>Поиск</span>
                                </div>
                            )}
                            <NavLink
                                to={'/favorites'}
                                className={({ isActive }) => clsx(styles.option, isActive && styles.active)}
                            >
                                {matchesMD ? <HeartIcon2 /> : <HeartIcon />}
                                <span>Избранное</span>
                            </NavLink>
                            <NavLink
                                to={'/compare'}
                                className={({ isActive }) => clsx(styles.option, isActive && styles.active)}
                            >
                                {matchesMD ? <StatisticIcon2 /> : <StatisticIcon />}
                                <span>Сравнить</span>
                            </NavLink>
                            <div className={styles.contacts}>
                                <a href={TELEGRAM} target={'_blank'} className={styles.option}>
                                    <TelegramIcon />
                                    <span>Telegram</span>
                                </a>
                                <a href={WHATSAPP} target={'_blank'} className={styles.option}>
                                    <WhatsappIcon />
                                    <span>Whatsapp</span>
                                </a>
                                <div className={styles.option}>
                                    <PhoneIcon />
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
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
