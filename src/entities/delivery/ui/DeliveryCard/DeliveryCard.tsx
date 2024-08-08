import { FC } from 'react';
import { IDelivery } from '@/entities/delivery';
import { BASE_URL } from '@/shared/consts';
import styles from './DeliveryCard.module.scss';

interface IDeliveryCardProps {
    delivery: IDelivery;
}

export const DeliveryCard: FC<IDeliveryCardProps> = ({ delivery }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <img src={BASE_URL + delivery.image} alt={delivery.title} />
                <p>{delivery.title}</p>
            </div>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: delivery.description }} />
        </div>
    );
};
