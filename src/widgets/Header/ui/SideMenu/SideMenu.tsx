import { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { useGetContactsQuery } from '@/entities/contacts';
import { useGetCategoriesQuery } from '@/entities/category';
import { ABOUT_LINKS, BASE_URL, SERVICES_LINKS } from '@/shared/consts';
import { formatPhoneNumber, getMangoNumber, intFormatPhoneNumber } from '@/shared/lib';
import ArrowDown from '@/shared/assets/icons/arrow-down2.svg?react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import styles from './SideMenu.module.scss';

interface ISideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SideMenu: FC<ISideMenuProps> = ({ isOpen, onClose }) => {
    const { data: contacts } = useGetContactsQuery();
    const { data: categories } = useGetCategoriesQuery();

    return typeof window !== 'undefined' ? (
        createPortal(
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className={clsx(styles.menu, 'scrollbar-hide')}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <section>
                                <h4 className={clsx(styles.title, styles.mainTitle)}>
                                    Оборудование
                                    <CloseIcon onClick={onClose} />
                                </h4>
                                <CollapseItemsList />
                            </section>
                            <section>
                                <h4 className={styles.title}>Услуги</h4>
                                <div>
                                    {categories &&
                                        SERVICES_LINKS.map((link) => {
                                            if (link.path === '/readyBusiness') {
                                                return categories
                                                    .filter((category) => category.title === 'readyBusiness')
                                                    .map((category) => (
                                                        <Link
                                                            key={link.path}
                                                            to={`catalog/${category.id}/${category.slug}`}
                                                            className={styles.link}
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    ));
                                            }

                                            return (
                                                <Link key={link.path} to={link.path} className={styles.link}>
                                                    {link.title}
                                                </Link>
                                            );
                                        })}
                                </div>
                            </section>
                            <section>
                                <h4 className={styles.title}>О нас</h4>
                                <div>
                                    {ABOUT_LINKS.map((link) => (
                                        <Link key={link.path} to={link.path} className={styles.link}>
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                            <section>
                                <h4 className={styles.title}>Контакты</h4>
                                {contacts && (
                                    <div className={styles.contacts}>
                                        <div>
                                            <div className={styles.subtitle}>Многоконтактный телефон</div>
                                            <a
                                                className='mgo-number'
                                                href={`tel:${intFormatPhoneNumber(contacts.phone)}`}
                                            >
                                                {getMangoNumber()}
                                                {formatPhoneNumber(contacts.phone)}
                                            </a>
                                        </div>
                                        <div>
                                            <div className={styles.subtitle}>Электронная почта</div>
                                            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                                        </div>
                                        <div className={styles.socials}>
                                            {contacts.images.map((social) => {
                                                return (
                                                    <a key={social.id} href={social.url} target={'_blank'}>
                                                        <img
                                                            key={social.id}
                                                            src={BASE_URL + social.image}
                                                            alt={'social'}
                                                        />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </section>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.overlay}
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                        />
                    </>
                )}
            </AnimatePresence>,
            document.getElementById('portal') as HTMLDivElement,
        )
    ) : (
        <></>
    );
};

const CollapseItemsList = () => {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const { data: categories } = useGetCategoriesQuery();

    const handleClick = (index: number) => {
        if (selectedItems.includes(index)) {
            return setSelectedItems(selectedItems.filter((item) => item !== index));
        }
        setSelectedItems([...selectedItems, index]);
    };

    return (
        <div className={styles.collapseItems}>
            {categories &&
                categories.map((item, index) => {
                    if (item.link || item.title === 'readyBusiness') return <Fragment key={item.id} />;

                    return (
                        <div key={item.id}>
                            <div onClick={() => handleClick(index)} className={styles.collapseItem}>
                                <span>{item.name}</span>
                                <motion.span
                                    animate={{ rotate: selectedItems.includes(index) ? 180 : 0 }}
                                    transition={{ damping: 0 }}
                                    className={styles.icon}
                                >
                                    <ArrowDown />
                                </motion.span>
                            </div>
                            <AnimatePresence initial={false}>
                                {selectedItems.includes(index) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className={styles.collapseWrap}
                                    >
                                        <div className={styles.collapseBody}>
                                            {item.subCategory.map((child) => {
                                                return (
                                                    <Link
                                                        key={child.id}
                                                        to={`/catalog/${item.id}/${item.slug}?brand=${child.title}`}
                                                        state={child}
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
                        </div>
                    );
                })}
        </div>
    );
};
