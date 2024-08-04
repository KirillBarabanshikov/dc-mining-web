import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
}

export const Input: FC<IInputProps> = ({ type = 'text', className, icon, ...props }) => {
    return (
        <div className={clsx(styles.input, className)}>
            <input type={type} {...props} />
            {icon}
        </div>
    );
};
