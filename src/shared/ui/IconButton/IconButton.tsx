import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './IconButton.module.scss';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    className?: string;
}

export const IconButton: FC<IIconButtonProps> = ({ icon, className, onClick }) => {
    return (
        <button type={'button'} onClick={onClick} className={clsx(styles.iconButton, className)}>
            {icon}
        </button>
    );
};
