import React, { FC } from 'react';
import clsx from 'clsx';
import clock from '@/shared/assets/images/advantages/clock.png';
import energy from '@/shared/assets/images/advantages/energy.png';
import camera from '@/shared/assets/images/advantages/camera.png';
import briefcase from '@/shared/assets/images/advantages/briefcase.png';
import shield from '@/shared/assets/images/advantages/shield.png';
import tools from '@/shared/assets/images/advantages/tools.png';
import styles from './Advantages.module.scss';

const items = {
    main: [
        { image: clock, title: 'Uptime работы оборудования от 95%' },
        { image: energy, title: 'Стоимость электроэнергии – от 5 руб/кВт' },
        { image: camera, title: 'Удаленный\nмониторинг' },
        { image: briefcase, title: 'Страхование\nоборудования' },
        { image: shield, title: 'Круглосуточная\nохрана' },
        { image: tools, title: 'ТО и сервис\nоборудования на месте' },
    ],
    'data-center': [],
};

interface IAdvantagesProps {
    as: 'main' | 'data-center';
}

export const Advantages: FC<IAdvantagesProps> = ({ as }) => {
    return (
        <div className={styles.advantages}>
            <div className={clsx(styles.advantagesContainer, 'container-wide')}>
                {items[as].map((item, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            <div className={styles.image}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
