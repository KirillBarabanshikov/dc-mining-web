import { FC, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { formatPhoneNumber, intFormatPhoneNumber, useBodyScrollLock, useMediaQuery } from '@/shared/lib';
import { BASE_URL, MAX_WIDTH_MD, MAX_WIDTH_XL } from '@/shared/consts';
import { Search, SearchButton } from '@/features/search';
import { OrderCallModal } from '@/features/call';
import { IconButton } from '@/shared/ui';
import { useGetContactsQuery } from '@/entities/contacts';
import Logo from '@/shared/assets/logo.svg?react';
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import HeartIcon2 from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic.svg?react';
import StatisticIcon2 from '@/shared/assets/icons/statistic2.svg?react';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import { SideMenu, HorizontalMenu, Burger } from './ui';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLocked, setIsLocked } = useBodyScrollLock();
    const location = useLocation();
    const matchesLG = useMediaQuery(MAX_WIDTH_XL);
    const matchesMD = useMediaQuery(MAX_WIDTH_MD);
    const { data: contacts } = useGetContactsQuery();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        setIsOpen(false);
        setIsLocked(false);
    }, [location, setIsLocked]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (typeof window === 'undefined') return;
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 0);
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setIsLocked(!isLocked);
    };

    return (
        <>
            <header className={clsx(styles.header, isSticky && styles.sticky)}>
                <div className={styles.headerContainer}>
                    <div className={styles.mainMenu}>
                        <IconButton icon={<Burger />} onClick={toggleMenu} className={styles.menuIcon} />
                        <Link to={'/'} className={styles.logo}>
                            <Logo />
                        </Link>
                        {!matchesLG && <Search className={styles.search} />}
                        <div className={styles.options}>
                            {matchesLG && <SearchButton className={clsx(styles.option, styles.searchOption)} />}
                            <FavoritesOption />
                            <CompareOption />
                            <div className={styles.contacts}>
                                {contacts &&
                                    contacts.contactHeaders.map((contact) => {
                                        return (
                                            <a
                                                key={contact.id}
                                                href={contact.url}
                                                target={'_blank'}
                                                className={styles.option}
                                            >
                                                <div className={styles.icon}>
                                                    <img src={BASE_URL + contact.image} alt={contact.title} />
                                                </div>
                                                <span>{contact.title}</span>
                                            </a>
                                        );
                                    })}
                                <OrderCallOption />
                            </div>
                        </div>
                    </div>
                    <div className={styles.horizontalMenu}>
                        {!matchesMD && <HorizontalMenu />}
                        {contacts && (
                            <div className={styles.horizontalMenuContacts}>
                                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                                <a href={`tel:${intFormatPhoneNumber(contacts.phone)}`}>
                                    {formatPhoneNumber(contacts.phone)}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <SideMenu isOpen={isOpen} onClose={toggleMenu} />
        </>
    );
};

const FavoritesOption = () => {
    const matchesMD = useMediaQuery(MAX_WIDTH_MD);
    const { favorites } = useSelector((state: RootState) => state.products);

    return (
        <NavLink to={'/favorites'} className={({ isActive }) => clsx(styles.option, isActive && styles.active)}>
            <div className={styles.icon}>
                {matchesMD ? <HeartIcon2 /> : <HeartIcon />}
                {!!favorites.length && <div className={styles.count}>{favorites.length}</div>}
            </div>
            <span>Избранное</span>
        </NavLink>
    );
};

const CompareOption = () => {
    const matchesMD = useMediaQuery(MAX_WIDTH_MD);
    const { compare } = useSelector((state: RootState) => state.products);

    return (
        <NavLink to={'/compare'} className={({ isActive }) => clsx(styles.option, isActive && styles.active)}>
            <div className={styles.icon}>
                {matchesMD ? <StatisticIcon2 /> : <StatisticIcon />}
                {!!compare.length && <div className={styles.count}>{compare.length}</div>}
            </div>
            <span>Сравнить</span>
        </NavLink>
    );
};

const OrderCallOption = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.option} onClick={() => setIsOpen(true)}>
                <div className={styles.icon}>
                    <PhoneIcon />
                </div>
                <span>Заказать звонок</span>
            </div>
            <OrderCallModal
                title={'Заказать звонок'}
                subtitle={'Оставьте свои контакты и мы вам перезвоним'}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};
