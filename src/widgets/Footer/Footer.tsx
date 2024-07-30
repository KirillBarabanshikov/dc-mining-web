import React from 'react';
import Logo from '@/shared/assets/logo.svg?react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ADDRESS, EMAIL, TELEPHONE, TELEPHONE_LINK } from '@/shared/consts';
import TelegramIcon from '@/shared/assets/icons/telegram2.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp2.svg?react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={clsx(styles.container, 'container')}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>
                <section>
                    <h5>Услуги</h5>
                    <div>
                        <Link to={''} className={styles.link}>
                            ASIC майнеры
                        </Link>
                        <Link to={''} className={styles.link}>
                            Размещение в дата центре
                        </Link>
                        <Link to={''} className={styles.link}>
                            Готовый бизнес под ключ
                        </Link>
                    </div>
                </section>
                <section>
                    <h5>Контакты</h5>
                    <div>
                        <a
                            href={`tel:${TELEPHONE_LINK}`}
                            className={styles.contact}
                        >
                            {TELEPHONE}
                        </a>
                        <a href={`mailto:${EMAIL}`} className={styles.contact}>
                            {EMAIL}
                        </a>
                    </div>
                </section>
                <section>
                    <h5>Офис</h5>
                    <div>
                        <a className={clsx(styles.link, styles.address)}>
                            {ADDRESS}
                        </a>
                    </div>
                </section>
                <section>
                    <h5>О компании</h5>
                    <div className={styles.socials}>
                        <a>
                            <TelegramIcon />
                        </a>
                        <a>
                            <WhatsappIcon />
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    );
};
