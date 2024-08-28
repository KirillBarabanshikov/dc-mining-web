import { Breadcrumbs } from '@/shared/ui';
import { Delivery } from '@/widgets';

const paths = [{ name: 'Главная', path: '/' }, { name: 'Доставка' }];

const DeliveryPage = () => {
    return (
        <>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <Delivery />
                </div>
            </section>
        </>
    );
};

export default DeliveryPage;
