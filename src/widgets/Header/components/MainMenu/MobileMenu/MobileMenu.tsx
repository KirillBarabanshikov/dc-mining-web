import { FC, Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import { aboutNavItems, mainNavItems, servicesNavItems } from '@/widgets/Header/components/MainMenu/data/data.ts';
import ArrowDown from '@/shared/assets/icons/arrow-down2.svg?react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { createPortal } from 'react-dom';

interface IMobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ isOpen }) => {
    const [selectedCollapse, setSelectedCollapse] = useState<number[]>([]);

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
                    className={styles.mobileMenu}
                >
                    <div>
                        <div className={styles.title}>Оборудование</div>
                        <div className={styles.mainItems}>
                            {mainNavItems.map((item, index) => {
                                return (
                                    <Fragment key={index}>
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
                                                    className={clsx(styles.links, styles.collapse)}
                                                >
                                                    {item.children.map((child, i) => {
                                                        return (
                                                            <Link key={i} to={child.path}>
                                                                {child.title}
                                                            </Link>
                                                        );
                                                    })}
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
                                    <Link key={index} to={item.path}>
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
                                    <Link key={index} to={item.path}>
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById('portal') as HTMLDivElement,
    );
};
