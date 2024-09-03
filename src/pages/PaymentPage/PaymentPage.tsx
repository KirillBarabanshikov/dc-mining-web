import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { Breadcrumbs } from '@/shared/ui';
import { Payments } from '@/widgets';

const paths = [{ name: 'Главная', path: '/' }, { name: 'Оплата' }];

interface IPaymentsPageProps {
    seo?: ISeo;
}

const PaymentPage: FC<IPaymentsPageProps> = ({ seo }) => {
    return (
        <>
            <Helmet>
                <title>{seo?.title}</title>
                <meta name='description' content={seo?.description} />
            </Helmet>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
            <div>
                <div className={'container'}>
                    <Payments />
                </div>
            </div>
        </>
    );
};

export default PaymentPage;
