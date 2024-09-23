import { createPortal } from 'react-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from '@/shared/lib';
import { useGetContactsQuery } from '@/entities/contacts';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import { OrderCallModal } from '@/features/call';
import PhoneIcon from '@/shared/assets/icons/phone.svg?react';
import styles from './BottomLinks.module.scss';

export const BottomLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                <div className={styles.option} onClick={() => setIsOpen(true)}>
                    <div className={styles.icon}>
                        <PhoneIcon />
                    </div>
                </div>
            </div>
            <OrderCallModal
                title={'Заказать звонок'}
                subtitle={'Оставьте свои контакты и мы вам перезвоним'}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>,
        document.getElementById('portal') as HTMLDivElement,
    );
};
