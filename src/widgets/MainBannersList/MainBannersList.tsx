import { FC } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import styles from './MainBannersList.module.scss';

interface IMainBannersListProps {
    className?: string;
}

export const MainBannersList: FC<IMainBannersListProps> = ({ className }) => {
    const navigate = useNavigate();

    return (
        <div className={clsx(styles.mainBannersList, className)}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={styles.bannerCard}>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                        <Button onClick={() => navigate(item.link)}>Подробнее</Button>
                    </div>
                );
            })}
        </div>
    );
};

const data = [
    {
        title: 'О компании',
        subtitle: 'Ведущий поставщик майнингового оборудования в России',
        link: '/about',
    },
    {
        title: 'О дата-центре',
        subtitle: 'Ведущий поставщик майнингового оборудования в России',
        link: '/data-center',
    },
    {
        title: 'СМИ о нас',
        subtitle: 'Ведущий поставщик майнингового оборудования в России',
        link: '/news',
    },
];
