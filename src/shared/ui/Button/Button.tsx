import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline';
    size?: 'lg' | 'md' | 'sm';
    isWide?: boolean;
}

export const Button: FC<IButtonProps> = ({
    size = 'lg',
    variant = 'solid',
    className,
    children,
    isWide = false,
    ...props
}) => {
    return (
        <button
            type={'button'}
            className={clsx(
                styles.button,
                styles[size],
                styles[variant],
                isWide && styles.isWide,
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
