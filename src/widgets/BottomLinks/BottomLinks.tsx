import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { intFormatPhoneNumber, useMediaQuery } from '@/shared/lib';
import { useGetContactsQuery } from '@/entities/contacts';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import styles from './BottomLinks.module.scss';

export const BottomLinks = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const { data: contacts } = useGetContactsQuery();

    if (!matches) return <></>;

    return createPortal(
        <div className={styles.bottomLinks}>
            <div className={styles.bottomLinksContainer}>
                {contacts &&
                    contacts.contactHeaders.map((contact) => {
                        return (
                            <a
                                href={contact.url}
                                target={'_blank'}
                                className={clsx(styles.option, styles[contact.title.toLowerCase()])}
                            >
                                <div className={styles.icon}>
                                    <img src={`${BASE_URL}/${contact.image}`} alt={contact.title} />
                                </div>
                            </a>
                        );
                    })}
                <a
                    href={`tel:${intFormatPhoneNumber(window.phone ? window.phone : contacts?.phone)}`}
                    className={styles.option}
                >
                    <div className={styles.icon}>
                        <PhoneIcon />
                    </div>
                </a>
            </div>
        </div>,
        document.getElementById('portal') as HTMLDivElement,
    );
};
