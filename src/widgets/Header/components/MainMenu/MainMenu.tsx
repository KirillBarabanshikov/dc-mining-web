import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mainNavItems, servicesNavItems, aboutNavItems } from './data/data.ts';
import ArrowDown from '@/shared/assets/icons/arrow-down.svg?react';
import styles from './MainMenu.module.scss';
import clsx from 'clsx';
import { EMAIL, MAX_WIDTH_MD, TELEGRAM, TELEPHONE, TELEPHONE_HREF, WHATSAPP } from '@/shared/consts';
import TelegramIcon from '@/shared/assets/icons/telegram2.svg?react';
import WhatsappIcon from '@/shared/assets/icons/whatsapp2.svg?react';
import { MobileMenu } from './MobileMenu';
import { useMediaQuery } from '@/shared/lib';

interface IMainMenuProps {
    isOpen: boolean;
}

export const MainMenu: FC<IMainMenuProps> = ({ isOpen }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);

    if (matches) {
        return <MobileMenu isOpen={isOpen} />;
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.menu}
                >
                    <div className={styles.tools}>
                        <div className={styles.title}>Оборудование</div>
                        <div className={styles.wrap}>
                            {mainNavItems.map((item, index) => {
                                return (
                                    <div key={index} className={styles.item}>
                                        <Link to={item.path} className={styles.linkTitle}>
                                            {item.title}
                                        </Link>
                                        <div className={styles.linkList}>
                                            {item.children.slice(0, 5).map((child, i) => {
                                                return (
                                                    <Link key={i} to={child.path} className={styles.link}>
                                                        {child.title}
                                                    </Link>
                                                );
                                            })}
                                            {item.children.length > 5 && (
                                                <>
                                                    <motion.div
                                                        initial={false}
                                                        animate={{
                                                            height: isCollapsed ? 'auto' : 0,
                                                            opacity: isCollapsed ? 1 : 0,
                                                            pointerEvents: isCollapsed ? 'initial' : 'none',
                                                        }}
                                                        className={styles.childrenList}
                                                    >
                                                        {item.children.slice(5).map((child, idx) => {
                                                            return (
                                                                <Link
                                                                    key={idx}
                                                                    to={child.path}
                                                                    className={clsx(styles.link)}
                                                                >
                                                                    {child.title}
                                                                </Link>
                                                            );
                                                        })}
                                                    </motion.div>
                                                    <span
                                                        className={clsx(styles.link, styles.more)}
                                                        onClick={() => setIsCollapsed((prev) => !prev)}
                                                    >
                                                        {isCollapsed ? 'Свернуть' : 'Еще'}
                                                        <motion.div animate={{ rotateX: isCollapsed ? '180deg' : 0 }}>
                                                            <ArrowDown />
                                                        </motion.div>
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.title}>Услуги</div>
                        <div className={styles.list}>
                            {servicesNavItems.map((item, index) => {
                                return (
                                    <Link key={index} to={item.path} className={styles.link}>
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.title}>О нас</div>
                        <div className={styles.list}>
                            {aboutNavItems.map((item, index) => {
                                return (
                                    <Link key={index} to={item.path} className={styles.link}>
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.title}>Контакты</div>
                        <div className={styles.contacts}>
                            <div>
                                <p>Многоконтактный телефон</p>
                                <a href={TELEPHONE_HREF}>{TELEPHONE}</a>
                            </div>
                            <div>
                                <p>Электронная почта</p>
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </div>
                            <div className={styles.socials}>
                                <a href={TELEGRAM} target={'_blank'}>
                                    <TelegramIcon width={'32px'} height={'32px'} />
                                </a>
                                <a href={WHATSAPP} target={'_blank'}>
                                    <WhatsappIcon width={'32px'} height={'32px'} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
