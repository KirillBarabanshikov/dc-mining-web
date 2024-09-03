import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { ISeo } from '@/entities/seo';
import { Breadcrumbs } from '@/shared/ui';
import { Delivery } from '@/widgets';

const paths = [{ name: 'Главная', path: '/' }, { name: 'Доставка' }];

interface IDeliveryPageProps {
    seo?: ISeo;
}

const DeliveryPage: FC<IDeliveryPageProps> = ({ seo }) => {
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
                    <Delivery />
                </div>
            </div>
        </>
    );
};

export default DeliveryPage;
