import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import MaskedInput, { Mask } from 'react-text-mask';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    theme?: 'white' | 'dark';
    error?: boolean;
    mask?: Mask | ((value: string) => Mask);
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ type = 'text', icon, theme = 'white', disabled, error, mask, className, ...props }, ref) => {
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
                {mask ? (
                    <MaskedInput type={type} mask={mask} disabled={disabled} {...props} />
                ) : (
                    <input type={type} disabled={disabled} ref={ref} {...props} />
                )}
                {icon && <div className={styles.icon}>{icon}</div>}
            </div>
        );
    },
);
