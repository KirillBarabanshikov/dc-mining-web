import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { dropdown, dropdownItem } from '../variants/variants.ts';
import styles from '../HorizontalMenu.module.scss';

interface IMenuItemProps {
    item: { title: string; children: { title: string; path: string }[] };
}

export const MenuItemDropdown: FC<IMenuItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={styles.horizontalMenuDropdownItem}>
            <span className={clsx(styles.horizontalMenuItem, styles.hidden)}>
                {item.title}
            </span>
            <motion.div
                onHoverStart={() => setIsOpen(true)}
                onHoverEnd={() => setIsOpen(false)}
                className={clsx(
                    styles.horizontalMenuItem,
                    styles.dropdown,
                    isOpen && styles.isOpen,
                )}
            >
                <span className={styles.horizontalMenuLink}>{item.title}</span>
                <AnimatePresence mode={'wait'}>
                    {isOpen && (
                        <motion.ul
                            variants={dropdown}
                            initial={'hidden'}
                            animate={'show'}
                            exit={'hidden'}
                            className={styles.dropdownList}
                        >
                            <motion.li
                                variants={dropdownItem}
                                initial={'hidden'}
                                animate={'show'}
                                exit={'hidden'}
                            />
                            {item.children.map((child, index) => {
                                return (
                                    <motion.li
                                        variants={dropdownItem}
                                        initial={'hidden'}
                                        animate={'show'}
                                        exit={'hidden'}
                                        key={index}
                                    >
                                        <Link to={child.path}>
                                            {child.title}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>
        </li>
    );
};
