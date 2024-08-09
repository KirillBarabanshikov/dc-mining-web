import { FC, Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import { aboutNavItems, servicesNavItems } from '@/widgets/Header/components/MainMenu/data/data.ts';
import ArrowDown from '@/shared/assets/icons/arrow-down2.svg?react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useGetContactsQuery } from '@/entities/contacts';
import { formatPhoneNumber, intFormatPhoneNumber } from '@/shared/lib';
import { BASE_URL } from '@/shared/consts';
import { useGetCategoriesQuery } from '@/entities/category';

interface IMobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ isOpen }) => {
    const [selectedCollapse, setSelectedCollapse] = useState<number[]>([]);
    const { data: contacts } = useGetContactsQuery();
    const { data: categories } = useGetCategoriesQuery();

    const handleCollapse = (index: number) => {
        if (selectedCollapse.includes(index)) {
            return setSelectedCollapse(selectedCollapse.filter((item) => item !== index));
        }
        setSelectedCollapse([...selectedCollapse, index]);
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={clsx(styles.mobileMenu, 'scrollbar-hide')}
                >
                    <div>
                        <div className={styles.title}>Оборудование</div>
                        <div className={styles.mainItems}>
                            {categories &&
                                categories.map((item, index) => {
                                    return (
                                        <Fragment key={item.id}>
                                            <div onClick={() => handleCollapse(index)} className={styles.collapseItem}>
                                                <span>{item.title}</span>
                                                <motion.span
                                                    animate={{ rotate: selectedCollapse.includes(index) ? 180 : 0 }}
                                                    transition={{ damping: 0 }}
                                                    className={styles.icon}
                                                >
                                                    <ArrowDown />
                                                </motion.span>
                                            </div>
                                            <AnimatePresence initial={false}>
                                                {selectedCollapse.includes(index) && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className={styles.collapseWrap}
                                                    >
                                                        <div className={clsx(styles.links, styles.collapse)}>
                                                            {item.subCategory.map((child) => {
                                                                return (
                                                                    <Link
                                                                        key={child.id}
                                                                        to={'/catalog'}
                                                                        className={styles.link}
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </Fragment>
                                    );
                                })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.title}>Услуги</div>
                        <div className={styles.links}>
                            {servicesNavItems.map((item, index) => {
                                return (
                                    <Link key={index} to={item.path} className={styles.link}>
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.title}>О нас</div>
                        <div className={styles.links}>
                            {aboutNavItems.map((item, index) => {
                                return (
                                    <Link key={index} to={item.path} className={styles.link}>
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.title}>Контакты</div>
                        <div className={styles.contacts}>
                            <div>
                                <div className={styles.subtitle}>Многоконтактный телефон</div>
                                {contacts && (
                                    <a href={`tel:${intFormatPhoneNumber(contacts.phone)}`}>
                                        {formatPhoneNumber(contacts.phone)}
                                    </a>
                                )}
                            </div>
                            <div>
                                <div className={styles.subtitle}>Электронная почта</div>
                                {contacts && <a href={`mailto:${contacts.email}`}>{contacts.email}</a>}
                            </div>
                            <div className={styles.socials}>
                                {contacts &&
                                    contacts.images.map((social) => {
                                        return (
                                            <a key={social.id} href={social.url} target={'_blank'}>
                                                <img key={social.id} src={BASE_URL + social.image} alt={'social'} />
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById('portal') as HTMLDivElement,
    );
};
