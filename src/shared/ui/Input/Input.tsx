import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface IInputProps {
    type?: 'text' | 'number';
    placeholder?: string;
    icon?: ReactNode;
    theme?: 'white' | 'dark';
    disabled?: boolean;
    error?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    autoFocus?: boolean;
    style?: object;
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ type = 'text', icon, theme = 'white', disabled, error, className, ...props }, ref) => {
        return (
            <div
                className={clsx(
                    styles.inputWrap,
                    styles[theme],
                    disabled && styles.disabled,
                    error && styles.error,
                    icon && styles.withIcon,
                    className,
                )}
            >
                <input type={type} disabled={disabled} ref={ref} {...props} />
                {icon && <div className={styles.icon}>{icon}</div>}
            </div>
        );
    },
);
