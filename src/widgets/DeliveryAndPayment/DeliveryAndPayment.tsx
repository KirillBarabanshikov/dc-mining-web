import { FC } from 'react';
import { DeliveryAndPaymentCard, IDeliveryAndPayment } from '@/entities/deliveryAndPayment';
import styles from './DeliveryAndPayment.module.scss';

interface IDeliveryAndPaymentProps {
    payments: IDeliveryAndPayment[];
    deliveries: IDeliveryAndPayment[];
}

export const DeliveryAndPayment: FC<IDeliveryAndPaymentProps> = ({ payments, deliveries }) => {
    return (
        <div className={styles.delivery}>
            <section>
                <h2>Оплата</h2>
                <div className={styles.wrap}>
                    {payments.map((data) => {
                        return <DeliveryAndPaymentCard key={data.id} data={data} />;
                    })}
                </div>
            </section>
            <section>
                <h2>Доставка</h2>
                <div className={styles.wrap}>
                    {deliveries.map((data) => {
                        return <DeliveryAndPaymentCard key={data.id} data={data} />;
                    })}
                </div>
            </section>
        </div>
    );
};
