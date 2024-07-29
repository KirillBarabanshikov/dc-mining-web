import { FC } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.scss';

interface IBadgeProps {
    text: string;
    theme: 'green' | 'red' | 'blue';
}

export const Badge: FC<IBadgeProps> = ({ text, theme }) => {
    return <span className={clsx(styles.badge, styles[theme])}>{text}</span>;
};
