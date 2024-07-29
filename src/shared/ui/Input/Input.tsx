import React, { FC, InputHTMLAttributes, useRef, useState } from 'react';
import clsx from 'clsx';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInputProps> = ({
    type = 'text',
    className,
    ...props
}) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleInputFocus() {
        if ('focus' in inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clearInput = () => {
        setValue('');
        if ('focus' in inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div
            className={clsx(styles.input, className)}
            onClick={handleInputFocus}
        >
            <input
                type={type}
                ref={inputRef}
                value={value}
                onChange={handleChange}
                {...props}
            />
            {type === 'search' && value ? (
                <CloseIcon onClick={clearInput} />
            ) : (
                <SearchIcon />
            )}
        </div>
    );
};
