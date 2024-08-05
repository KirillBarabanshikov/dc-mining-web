import React, { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import clsx from 'clsx';
import { RecentProductCard } from '@/entities/product';
import styles from './RecentProductsList.module.scss';

export const RecentProductsList = () => {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const { events } = useDraggable(ref);

    return (
        <section className={styles.recent}>
            <div className={'container scrollable'}>
                <h2 className={'section-title-primary'}>Вы недавно смотрели</h2>
                <div className={clsx(styles.list, 'scrollbar-hide')} {...events} ref={ref}>
                    {Array.from({ length: 5 }).map((_, index) => {
                        return <RecentProductCard key={index} />;
                    })}
                </div>
            </div>
        </section>
    );
};
