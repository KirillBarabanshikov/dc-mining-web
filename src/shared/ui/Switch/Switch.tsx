import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './Switch.module.scss';
import clsx from 'clsx';

interface ISwitchProps {
    isOn: boolean;
    onClick: () => void;
}

export const Switch: FC<ISwitchProps> = ({ isOn, onClick }) => {
    return (
        <motion.div className={clsx(styles.switch, isOn && styles.isOn)} onClick={onClick} layout layoutRoot>
            <motion.div className={styles.handle} layout transition={{ type: 'easeOut' }} />
        </motion.div>
    );
};
