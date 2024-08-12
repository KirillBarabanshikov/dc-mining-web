import { FC } from 'react';
import { BASE_URL } from '@/shared/consts';
import { IDeliveryAndPayment } from '../../model';
import styles from './DeliveryAndPaymentCard.module.scss';

interface IDeliveryCardProps {
    data: IDeliveryAndPayment;
}

export const DeliveryAndPaymentCard: FC<IDeliveryCardProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <img src={BASE_URL + data.image} alt={data.title} />
                <p>{data.title}</p>
            </div>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
    );
};
