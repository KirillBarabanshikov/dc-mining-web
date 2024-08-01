import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Radio.module.scss';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Radio: FC<IRadioProps> = ({ label, ...props }) => {
    return (
        <label className={styles.wrap}>
            <input type={'radio'} {...props} />
            <span className={clsx(styles.radio)}>
                <div className={styles.ellipse} />
            </span>
            <span className={styles.label}>{label}</span>
        </label>
    );
};
