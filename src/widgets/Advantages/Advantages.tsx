import { FC } from 'react';
import clsx from 'clsx';
import clock from '@/shared/assets/images/advantages/clock.png';
import energy from '@/shared/assets/images/advantages/energy.png';
import camera from '@/shared/assets/images/advantages/camera.png';
import briefcase from '@/shared/assets/images/advantages/briefcase.png';
import shield from '@/shared/assets/images/advantages/shield.png';
import tools from '@/shared/assets/images/advantages/tools.png';
import styles from './Advantages.module.scss';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';

const items = {
    main: [
        { image: clock, title: 'Uptime работы оборудования от 95%' },
        { image: energy, title: 'Стоимость электроэнергии – от 5 руб/кВт' },
        { image: camera, title: 'Удаленный\nмониторинг' },
        { image: briefcase, title: 'Страхование\nоборудования' },
        { image: shield, title: 'Круглосуточная\nохрана' },
        { image: tools, title: 'ТО и сервис\nоборудования на месте' },
    ],
    'data-center': [
        {
            image: clock,
            title: 'Uptime\n99%',
            subtitle: 'Uptime работы оборудования от 95%',
            desc: 'Обеспечивает высокую надежность: таким образом ваше оборудование не будет простаивать и будет приносить больше прибыли.',
        },
        {
            image: energy,
            title: 'Низкая стоимость электроэнергии',
            subtitle: 'Стоимость электроэнергии – от 5 руб/кВт',
            desc: 'Это полностью легальная электроэнергия — от 5,5 рубля кВТ/час с НДС.',
        },
        {
            image: camera,
            title: 'Мониторинг\nразмещения',
            subtitle: 'Удаленный\nмониторинг',
            desc: 'В онлайн формате сможете отслеживать эффективность вашего оборудования из любой точки мира.',
        },
        {
            image: briefcase,
            title: 'Всё оборудование застраховано',
            subtitle: 'Страхование\nоборудования',
            desc: 'Поэтому ваши средства всегда находятся в безопасности и в случае непредвиденных обстоятельств мы вернем вам деньги.',
        },
        {
            image: shield,
            title: 'Охрана\nРосгвардии',
            subtitle: 'Круглосуточная\nохрана',
            desc: 'Весь объект в круглосуточном режиме находится под охраной — все оборудование надежно защищено.',
        },
    ],
};

interface IAdvantagesProps {
    as: 'main' | 'data-center';
}

export const Advantages: FC<IAdvantagesProps> = ({ as }) => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div className={clsx(styles.advantages, styles[matches ? 'main' : as])}>
            <div className={clsx(styles.advantagesContainer, 'container-wide')}>
                {items[as].map((item, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            <div className={styles.image}>
                                <img src={`${item.image}`} alt={item.title} />
                            </div>
                            {as === 'data-center' && matches ? (
                                <p className={styles.title}>{'subtitle' in item && item.subtitle}</p>
                            ) : (
                                <p className={styles.title}>{item.title}</p>
                            )}
                            {'desc' in item && <p className={styles.desc}>{item.desc}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
