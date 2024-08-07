import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import FileIcon from '@/shared/assets/icons/file.svg?react';
import styles from './File.module.scss';

interface IFileProps extends InputHTMLAttributes<HTMLInputElement> {}

export const File = forwardRef<HTMLInputElement, IFileProps>(({ className, onChange, ...props }, ref) => {
    const [file, setFile] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target.files.length ? e.target.files[0].name : 'Файл не выбран');
        onChange && onChange(e);
    };

    return (
        <label className={clsx(styles.file, className)}>
            <input type='file' onChange={handleChange} ref={ref} {...props} />
            <span className={styles.label}>{file ? truncate(file) : 'Файл не выбран'}</span>
            <div className={styles.icon}>
                <FileIcon />
            </div>
        </label>
    );
});

function truncate(string: string) {
    if (string.length < 18) return string;

    return string.substring(0, 8) + '...' + string.substring(string.length - 10);
}
