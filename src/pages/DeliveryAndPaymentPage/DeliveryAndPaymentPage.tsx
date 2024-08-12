import { Breadcrumbs } from '@/shared/ui';
import { DeliveryAndPayment } from '@/widgets';
import { useGetDeliveriesQuery, useGetPaymentsQuery } from '@/entities/deliveryAndPayment';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'Доставка и оплата', path: '/delivery-delivery' },
];

const DeliveryAndPaymentPage = () => {
    const { data: deliveries } = useGetDeliveriesQuery();
    const { data: payments } = useGetPaymentsQuery();

    return (
        <div>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={'section-title-secondary'}>Доставка и оплата</h1>
                    {deliveries && payments && <DeliveryAndPayment deliveries={deliveries} payments={payments} />}
                </div>
            </section>
        </div>
    );
};

export default DeliveryAndPaymentPage;
