import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    theme?: 'white' | 'dark';
    error?: boolean;
    mask?: any;
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
                    <PhoneInput ref={ref} {...props} />
                ) : (
                    <input type={type} disabled={disabled} ref={ref} {...props} />
                )}
                {icon && <div className={styles.icon}>{icon}</div>}
            </div>
        );
    },
);

export const PhoneInput = forwardRef<HTMLInputElement, IInputProps>(
    ({ type = 'text', icon, theme = 'white', disabled, error, mask, onChange, className, ...props }, ref) => {
        const [value, setValue] = useState('+7');

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e);
            let inputValue = e.target.value;

            inputValue = inputValue.replace(/\D/g, '');

            if (inputValue.startsWith('7')) {
                inputValue = inputValue.substring(1);
            }

            inputValue = inputValue.substring(0, 10);

            let formattedValue = '+7';

            if (inputValue.length > 0) {
                formattedValue += ' (' + inputValue.substring(0, 3);
            }
            if (inputValue.length >= 4) {
                formattedValue += ') ' + inputValue.substring(3, 6);
            }
            if (inputValue.length >= 7) {
                formattedValue += '-' + inputValue.substring(6, 8);
            }
            if (inputValue.length >= 9) {
                formattedValue += '-' + inputValue.substring(8, 10);
            }

            setValue(formattedValue);
        };

        return <input type={'tel'} value={value} onChange={handleChange} ref={ref} {...props} />;
    },
);
