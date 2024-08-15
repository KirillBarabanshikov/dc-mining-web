import { FC } from 'react';
import clsx from 'clsx';
import styles from './Burger.module.scss';

interface IBurgerProps {
    onClick: () => void;
}

export const Burger: FC<IBurgerProps> = ({ onClick }) => {
    return (
        <div className={styles.burger} onClick={onClick}>
            <div className={styles.burgerBars}>
                <span className={clsx(styles.burgerBar, styles.burgerBar1)} />
                <span className={clsx(styles.burgerBar, styles.burgerBar2)} />
                <span className={clsx(styles.burgerBar, styles.burgerBar3)} />
            </div>
        </div>
    );
};
