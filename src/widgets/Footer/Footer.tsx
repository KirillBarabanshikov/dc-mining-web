import Logo from '@/shared/assets/logo.svg?react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useGetContactsQuery } from '@/entities/contacts';
import { ADDRESS, BASE_URL } from '@/shared/consts';
import { formatPhoneNumber, intFormatPhoneNumber } from '@/shared/lib';
import styles from './Footer.module.scss';

export const Footer = () => {
    const { data: contacts } = useGetContactsQuery();

    return (
        <footer className={styles.footer}>
            <div className={clsx(styles.container, 'container')}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>
                {contacts && (
                    <>
                        <section>
                            <h5>Услуги</h5>
                            <div>
                                <Link to={'/catalog'} className={styles.link}>
                                    ASIC майнеры
                                </Link>
                                <Link to={'/data-center'} className={styles.link}>
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
                                <a href={`tel:${intFormatPhoneNumber(contacts.phone)}`} className={styles.contact}>
                                    {formatPhoneNumber(contacts.phone)}
                                </a>
                                <a href={`mailto:${contacts.email}`} className={styles.contact}>
                                    {contacts.email}
                                </a>
                            </div>
                        </section>
                        <section>
                            <h5>Офис</h5>
                            <div>
                                <a className={clsx(styles.link, styles.address)}>{ADDRESS}</a>
                            </div>
                        </section>
                        <section>
                            <h5>О компании</h5>
                            <div className={styles.socials}>
                                {contacts.socials.map((social) => {
                                    return (
                                        <a key={social.id} href={social.url} target={'_blank'}>
                                            <img src={BASE_URL + social.image} />
                                        </a>
                                    );
                                })}
                            </div>
                        </section>
                    </>
                )}
            </div>
        </footer>
    );
};
