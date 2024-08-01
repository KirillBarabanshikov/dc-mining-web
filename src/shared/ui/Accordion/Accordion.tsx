import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowIcon from '@/shared/assets/icons/arrow-up.svg?react';
import styles from './Accordion.module.scss';

interface IAccordionProps {
    title: string;
    body: string;
}

export const Accordion: FC<IAccordionProps> = ({ title, body }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles.accordion}>
            <div onClick={handleClick} className={styles.head}>
                <h3>{title}</h3>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ damping: 0 }}>
                    <ArrowIcon />
                </motion.span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.body}
                    >
                        <p>{body}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
