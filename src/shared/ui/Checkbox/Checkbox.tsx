import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import CheckIcon from '@/shared/assets/icons/check.svg?react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string | ReactNode;
    error?: boolean;
    theme?: 'blue' | 'white';
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    ({ label, error, theme = 'blue', className, ...props }, ref) => {
        return (
            <label className={clsx(styles.wrap, error && styles.error, styles[theme], className)}>
                <input type='checkbox' ref={ref} {...props} />
                <span className={styles.checkbox}>
                    <CheckIcon />
                </span>
                <span className={styles.label}>{label}</span>
            </label>
        );
    },
);
