import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline';
    size?: 'lg' | 'md' | 'sm';
}

export const Button: FC<IButtonProps> = ({
    size = 'lg',
    variant = 'solid',
    className,
    children,
    ...props
}) => {
    return (
        <button
            type={'button'}
            className={clsx(
                styles.button,
                styles[size],
                styles[variant],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
