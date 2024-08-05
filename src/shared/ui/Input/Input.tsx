import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    theme?: 'white' | 'dark';
}

export const Input: FC<IInputProps> = ({ type = 'text', className, icon, theme = 'white', ...props }) => {
    return (
        <div className={clsx(styles.input, styles[theme], className)}>
            <input type={type} {...props} />
            {icon}
        </div>
    );
};
