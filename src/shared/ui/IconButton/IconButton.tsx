import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './IconButton.module.scss';

interface IIconButtonProps {
    icon: ReactNode;
    className?: string;
}

export const IconButton: FC<IIconButtonProps> = ({ icon, className }) => {
    return (
        <button type={'button'} className={clsx(styles.iconButton, className)}>
            {icon}
        </button>
    );
};
