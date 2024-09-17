import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetContactsQuery } from '@/entities/contacts';
import { formatPhoneNumber, intFormatPhoneNumber } from '@/shared/lib';
import img from '@/shared/assets/images/call/call-me.png';
import styles from './CallMeBanner.module.scss';

export const CallMeBanner = () => {
    const { data: contacts } = useGetContactsQuery();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <section className={styles.banner}>
                    <div className={styles.content}>
                        <h3>Проблемы с выбором оборудования?</h3>
                        <p>Свяжитесь с нами, мы поможем подобрать оптимальное решение</p>
                        {contacts && (
                            <div className={styles.links}>
                                <Link
                                    className='mgo-number'
                                    to={`tel:${intFormatPhoneNumber(window.phone ?? contacts.phone)}`}
                                >
                                    {formatPhoneNumber(window.phone ?? contacts.phone)}
                                </Link>
                                <Link to={`mailto:${contacts.email}`}>{contacts.email}</Link>
                            </div>
                        )}
                    </div>
                    <img src={`${img}`} alt={'Call'} />
                </section>
            )}
        </>
    );
};
