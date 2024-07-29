import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInputProps> = ({ type = 'text', ...props }) => {
    return (
        <div className={styles.input}>
            <input type={type} {...props} />
        </div>
    );
};
