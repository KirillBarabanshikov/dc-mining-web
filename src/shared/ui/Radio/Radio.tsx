import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Radio.module.scss';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    radioSize?: 'lg' | 'sm';
    isChecked?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
    ({ label, radioSize = 'lg', isChecked, className, ...props }, ref) => {
        return (
            <label className={clsx(styles.wrap, styles[radioSize], className)}>
                <input type={'radio'} ref={ref} {...props} />
                <span className={clsx(styles.radio, isChecked && styles.checked)}>
                    <div className={styles.ellipse} />
                </span>
                <span className={styles.label}>{label}</span>
            </label>
        );
    },
);
