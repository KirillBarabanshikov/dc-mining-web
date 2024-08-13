import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './CustomFilters.module.scss';

const data = [
    'ASIC для майнинга Bitcoin',
    'ASIC для майнинга LTC / DOGE',
    'Мощные асики',
    'Быстрая окупаемость',
    'Прибыльные асики',
];

interface ICustomFiltersProps {
    className?: string;
}

export const CustomFilters: FC<ICustomFiltersProps> = ({ className }) => {
    const [selected, setSelected] = useState(-1);

    const handleSelect = (index: number) => {
        setSelected((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className={clsx(styles.receipts, 'scrollbar-hide', className)}>
            {data.map((value, index) => (
                <div
                    key={value}
                    onClick={() => handleSelect(index)}
                    className={clsx(styles.receipt, selected === index && styles.active)}
                >
                    {value}
                </div>
            ))}
        </div>
    );
};
