import { FC, InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import FileIcon from '@/shared/assets/icons/file.svg?react';
import styles from './File.module.scss';

interface IFileProps extends InputHTMLAttributes<HTMLInputElement> {}

export const File: FC<IFileProps> = ({ className, ...props }) => {
    const [file, setFile] = useState('');

    return (
        <label className={clsx(styles.file, className)}>
            <input type='file' onChange={(e) => setFile(e.target.files![0].name)} {...props} />
            <span className={styles.label}>{file ? truncate(file) : 'Файл не выбран'}</span>
            <div className={styles.icon}>
                <FileIcon />
            </div>
        </label>
    );
};

function truncate(string: string) {
    if (string.length < 18) return string;

    return string.substring(0, 8) + '...' + string.substring(string.length - 10);
}
