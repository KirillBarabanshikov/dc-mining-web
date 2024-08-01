import { Breadcrumbs } from '@/shared/ui';
import { DeliveryAndPayment } from '@/widgets';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'Доставка и оплата', path: '/delivery' },
];

const DeliveryPage = () => {
    return (
        <div>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <h1 className={'section-title-secondary'}>Доставка и оплата</h1>
                    <DeliveryAndPayment />
                </div>
            </section>
        </div>
    );
};

export default DeliveryPage;
