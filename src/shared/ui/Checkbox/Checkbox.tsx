import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import CheckIcon from '@/shared/assets/icons/check.svg?react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelSlot?: ReactNode;
    theme?: 'blue' | 'white';
    checkboxSize?: 'lg' | 'sm';
    isChecked?: boolean;
}

export const Checkbox: FC<ICheckboxProps> = ({
    label,
    labelSlot,
    theme = 'blue',
    checkboxSize = 'lg',
    isChecked = false,
    className,
    ...props
}) => {
    return (
        <label className={clsx(styles.wrap, styles[checkboxSize], className)}>
            <input type='checkbox' {...props} />
            <span className={clsx(styles.checkbox, isChecked && styles.checked, styles[theme])} aria-hidden='true'>
                <CheckIcon />
            </span>
            {labelSlot ? labelSlot : <span>{label}</span>}
        </label>
    );
};
