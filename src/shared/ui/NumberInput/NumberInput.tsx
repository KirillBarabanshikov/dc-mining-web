import React, { FC, useState } from 'react';
import { Button, Input } from '@/shared/ui';
import clsx from 'clsx';
import MinusIcon from '@/shared/assets/icons/minus.svg?react';
import PlusIcon from '@/shared/assets/icons/plus.svg?react';
import styles from './NumberInput.module.scss';

interface INumberInputProps {
    min?: number;
    max?: number;
    defaultValue?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: FC<INumberInputProps> = ({ min, max, defaultValue = 0 }) => {
    const [count, setCount] = useState(defaultValue);

    const increment = () => {
        if (typeof max !== 'undefined') {
            return setCount((prev) => (prev >= max ? max : prev + 1));
        }
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        if (typeof min !== 'undefined') {
            return setCount((prev) => (prev <= min ? min : prev - 1));
        }
        setCount((prev) => prev - 1);
    };

    return (
        <div className={styles.numberInput}>
            <Button
                size={'md'}
                className={clsx(styles.item, styles.button)}
                onClick={decrement}
                disabled={count <= min!}
            >
                <MinusIcon />
            </Button>
            <div className={styles.item}>
                <Input
                    type={'number'}
                    // min={min!}
                    // max={max!}
                    value={`${count}`}
                    onChange={(e) => setCount(+e.target.value)}
                    style={{ textAlign: 'center' }}
                />
            </div>
            <Button
                size={'md'}
                className={clsx(styles.item, styles.button)}
                onClick={increment}
                disabled={count >= max!}
            >
                <PlusIcon />
            </Button>
        </div>
    );
};
