import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Modal.module.scss';
import clsx from 'clsx';
import { useBodyScrollLock } from '@/shared/lib';

interface IModal extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    className?: string;
}

export const Modal: FC<IModal> = ({ children, isOpen, onClose, title, subtitle, className }) => {
    const { setIsLocked } = useBodyScrollLock();

    useEffect(() => {
        setIsLocked(isOpen);
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.overlay}
                    onClick={onClose}
                >
                    <div className={clsx(styles.modal, className)} onClick={(e) => e.stopPropagation()}>
                        {title && <h2>{title}</h2>}
                        {subtitle && <p>{subtitle}</p>}
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById('portal') as HTMLDivElement,
    );
};
