import { FC } from 'react';
import clsx from 'clsx';
import { BASE_URL } from '@/shared/consts';
// import clock from '@/shared/assets/images/advantages/clock.png';
// import energy from '@/shared/assets/images/advantages/energy.png';
// import camera from '@/shared/assets/images/advantages/camera.png';
// import briefcase from '@/shared/assets/images/advantages/briefcase.png';
// import shield from '@/shared/assets/images/advantages/shield.png';
// import tools from '@/shared/assets/images/advantages/tools.png';
import styles from './Advantages.module.scss';

// const items = [
//     { image: clock, title: 'Uptime работы оборудования от 95%' },
//     { image: energy, title: 'Стоимость электроэнергии – от 5 руб/кВт' },
//     { image: camera, title: 'Удаленный\nмониторинг' },
//     { image: briefcase, title: 'Страхование\nоборудования' },
//     { image: shield, title: 'Круглосуточная\nохрана' },
//     { image: tools, title: 'ТО и сервис\nоборудования на месте' },
// ];

interface IAdvantagesProps {
    advantages?: {
        id: number;
        description: string;
        image: string;
        title: string;
    }[];
}

export const Advantages: FC<IAdvantagesProps> = ({ advantages }) => {
    return (
        <div className={clsx(styles.advantages, advantages && styles['data-center'])}>
            <div className={clsx(styles.advantagesContainer, 'container-wide')}>
                {advantages &&
                    advantages.map((advantage) => {
                        return (
                            <div key={advantage.id} className={styles.item}>
                                <div className={styles.image}>
                                    <img src={BASE_URL + advantage.image} alt={advantage.title} />
                                </div>
                                <p className={styles.title}>{advantage.title}</p>
                                <p
                                    className={styles.desc}
                                    dangerouslySetInnerHTML={{ __html: advantage.description }}
                                />
                            </div>
                        );
                    })}
                {/*: items.map((item, index) => {*/}
                {/*      return (*/}
                {/*          <div key={index} className={styles.item}>*/}
                {/*              <div className={styles.image}>*/}
                {/*                  <img src={item.image} alt={item.title} />*/}
                {/*              </div>*/}
                {/*              <p className={styles.title}>{item.title}</p>*/}
                {/*          </div>*/}
                {/*      );*/}
                {/*  })}*/}
            </div>
        </div>
    );
};
