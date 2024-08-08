import { DeliveryCard, useGetDeliveriesQuery, useGetPaymentsQuery } from '@/entities/delivery';
import styles from './DeliveryAndPayment.module.scss';

export const DeliveryAndPayment = () => {
    const { data: deliveries } = useGetDeliveriesQuery();
    const { data: payments } = useGetPaymentsQuery();

    return (
        <div className={styles.delivery}>
            <section>
                <h2>Оплата</h2>
                <div className={styles.wrap}>
                    {payments &&
                        payments.map((delivery) => {
                            return <DeliveryCard key={delivery.id} delivery={delivery} />;
                        })}
                </div>
            </section>
            <section>
                <h2>Доставка</h2>
                <div className={styles.wrap}>
                    {deliveries &&
                        deliveries.map((delivery) => {
                            return <DeliveryCard key={delivery.id} delivery={delivery} />;
                        })}
                </div>
            </section>
        </div>
    );
};
