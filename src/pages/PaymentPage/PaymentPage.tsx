import { Breadcrumbs } from '@/shared/ui';
import { Payments } from '@/widgets';

const paths = [{ name: 'Главная', path: '/' }, { name: 'Оплата' }];

const PaymentPage = () => {
    return (
        <>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <section>
                <div className={'container'}>
                    <Payments />
                </div>
            </section>
        </>
    );
};

export default PaymentPage;
