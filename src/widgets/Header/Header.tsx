import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Input } from '@/shared/ui';
import clsx from 'clsx';
import { HorizontalMenu } from '@/widgets';
import Logo from '@/shared/assets/logo.svg?react';
import BurgerIcon from '@/shared/assets/icons/burger.svg?react';
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic.svg?react';
import TelegramIcon from '@/shared/assets/icons/telegram.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp.svg?react';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={clsx(styles.header, 'container-wide')}>
            <div className={styles.mainMenu}>
                <IconButton icon={<BurgerIcon />} />
                <Link to={'/'} className={styles.logo}>
                    <Logo />
                </Link>
                <Input
                    type={'search'}
                    placeholder={'Поиск'}
                    className={styles.search}
                />
                <div className={styles.options}>
                    <div className={styles.option}>
                        <HeartIcon />
                        <span>Избранное</span>
                    </div>
                    <div className={styles.option}>
                        <StatisticIcon />
                        <span>Сравнить</span>
                    </div>
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
                </div>
            </div>
            <HorizontalMenu />
        </header>
    );
};
