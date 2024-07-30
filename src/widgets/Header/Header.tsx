import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconButton, Input } from '@/shared/ui';
import { HorizontalMenu } from '@/widgets';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_LG, MAX_WIDTH_MD } from '@/shared/consts';
import Logo from '@/shared/assets/logo.svg?react';
import BurgerIcon from '@/shared/assets/icons/burger.svg?react';
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp.svg?react';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const matchesLG = useMediaQuery(MAX_WIDTH_LG);
    const matchesMD = useMediaQuery(MAX_WIDTH_MD);

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.mainMenu}>
                    <IconButton
                        icon={<BurgerIcon />}
                        className={styles.menuIcon}
                    />
                    <Link to={'/'} className={styles.logo}>
                        <Logo />
                    </Link>
                    {!matchesLG && (
                        <Input
                            type={'search'}
                            placeholder={'Поиск'}
                            className={styles.search}
                        />
                    )}
                    <div className={styles.options}>
                        {matchesLG && (
                            <div className={styles.option}>
                                <SearchIcon />
                                <span>Поиск</span>
                            </div>
                        )}
                        <NavLink to={''} className={styles.option}>
                            <HeartIcon />
                            <span>Избранное</span>
                        </NavLink>
                        <NavLink className={styles.option}>
                            <StatisticIcon />
                            <span>Сравнить</span>
                        </NavLink>
                        {!matchesMD && (
                            <div className={styles.contacts}>
                                <div className={styles.option}>
                                    <TelegramIcon />
                                    <span>Telegram</span>
                                </div>
                                <div className={styles.option}>
                                    <WhatsappIcon />
                                    <span>Whatsapp</span>
                                </div>
                                <div className={styles.option}>
                                    <PhoneIcon />
                                    <span>Заказать звонок</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {!matchesMD && <HorizontalMenu />}
            </div>
        </header>
    );
};
