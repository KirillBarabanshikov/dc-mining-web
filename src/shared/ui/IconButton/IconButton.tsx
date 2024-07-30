import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './IconButton.module.scss';

interface IIconButtonProps {
    icon: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const IconButton: FC<IIconButtonProps> = ({
    icon,
    className,
    onClick,
}) => {
    return (
        <button
            type={'button'}
            onClick={onClick}
            className={clsx(styles.iconButton, className)}
        >
            {icon}
        </button>
    );
};
