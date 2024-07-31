import { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import CheckIcon from '@/shared/assets/icons/check.svg?react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
    label?: string;
    labelSlot?: ReactNode;
    theme?: 'blue' | 'white';
    className?: string;
}

export const Checkbox: FC<ICheckboxProps> = ({ label, labelSlot, theme = 'blue', className }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className={styles.wrap}>
            <input
                type='checkbox'
                onChange={() => {
                    setIsChecked(!isChecked);
                }}
            />
            <span
                className={clsx(styles.checkbox, isChecked && styles.active, styles[theme], className)}
                aria-hidden='true'
            >
                <CheckIcon />
            </span>
            {labelSlot ? labelSlot : <span>{label}</span>}
        </label>
    );
};
