import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ICategory, useGetCategoriesQuery } from '@/entities/category';
import { dropdown, dropdownItem } from './variants/variants.ts';
import styles from './HorizontalMenu.module.scss';

export const HorizontalMenu = () => {
    const { data: categories } = useGetCategoriesQuery();

    return (
        <nav className={styles.horizontalMenu}>
            <ul className={styles.horizontalMenuList}>
                {categories &&
                    categories.map((item) => {
                        if (item.link || item.subCategory.length === 0) {
                            return (
                                <li key={item.id} className={clsx(styles.horizontalMenuItem, styles.item)}>
                                    <Link
                                        to={item.link ?? `/catalog/${item.id}/${item.slug}`}
                                        className={styles.horizontalMenuLink}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        }

                        return <MenuItemDropdown key={item.id} item={item} />;
                    })}
            </ul>
        </nav>
    );
};

const MenuItemDropdown: FC<{ item: ICategory }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={clsx(styles.horizontalMenuDropdownItem, styles.item)}>
            <span className={clsx(styles.horizontalMenuItem, styles.hidden)} aria-hidden={true}>
                {item.name}
            </span>
            <motion.div
                onHoverStart={() => setIsOpen(true)}
                onHoverEnd={() => setIsOpen(false)}
                className={clsx(styles.horizontalMenuItem, styles.dropdown, isOpen && styles.isOpen)}
            >
                <Link to={`/catalog/${item.id}/${item.slug}`} className={styles.horizontalMenuLink}>
                    {item.name}
                </Link>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={dropdown}
                            initial={'hidden'}
                            animate={'show'}
                            exit={'hidden'}
                            className={styles.dropdownList}
                        >
                            <ul>
                                {item.subCategory.map((child, index) => {
                                    return (
                                        <motion.li
                                            variants={dropdownItem}
                                            initial={'hidden'}
                                            animate={'show'}
                                            exit={'hidden'}
                                            key={index}
                                        >
                                            <Link
                                                to={`/catalog/${item.id}/${item.slug}?brand=${child.title}`}
                                                state={child.title}
                                            >
                                                {child.title}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </li>
    );
};
