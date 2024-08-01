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
        <div className={clsx(styles.switch, isOn && styles.isOn)} onClick={onClick}>
            <motion.div className={styles.handle} layout transition={{ type: 'easeOut' }} />
        </div>
    );
};
