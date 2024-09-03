import { FC } from 'react';
import { BASE_URL } from '@/shared/consts';
import { IDeliveryAndPaymentInfo, useGetDeliveryInfoQuery, useGetPaymentInfoQuery } from '@/entities/pageInfo';
import styles from './DeliveryAndPayment.module.scss';
import clsx from 'clsx';

interface IDeliveryAndPaymentProps {
    variant?: 'page' | 'productInfo';
}

export const Delivery: FC<IDeliveryAndPaymentProps> = ({ variant = 'page' }) => {
    const { data: deliveries } = useGetDeliveryInfoQuery();

    return (
        <div className={clsx(styles.delivery, styles[variant])}>
            {deliveries && (
                <section>
                    {variant === 'page' ? <h1>Доставка</h1> : <h2>Доставка</h2>}
                    <div className={styles.wrap}>
                        {deliveries.map((data) => {
                            return <DeliveryAndPaymentCard key={data.id} data={data} />;
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

export const Payments: FC<IDeliveryAndPaymentProps> = ({ variant = 'page' }) => {
    const { data: payments } = useGetPaymentInfoQuery();

    return (
        <div className={clsx(styles.delivery, styles[variant])}>
            {payments && (
                <section>
                    {variant === 'page' ? <h1>Оплата</h1> : <h2>Оплата</h2>}
                    <div className={styles.wrap}>
                        {payments.map((data) => {
                            return <DeliveryAndPaymentCard key={data.id} data={data} />;
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

interface IDeliveryCardProps {
    data: IDeliveryAndPaymentInfo;
}

const DeliveryAndPaymentCard: FC<IDeliveryCardProps> = ({ data }) => {
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
