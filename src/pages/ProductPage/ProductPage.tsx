import { useLocation } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/ui';
import { AdvantagesDCMining, CallMeBanner, ProductDetails, RecentProductsList } from '@/widgets';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { useGetProductByIdQuery } from '@/entities/product';
import { useGetAboutInfoQuery } from '@/entities/pageInfo';
import styles from './ProductPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

const ProductPage = () => {
    const { state } = useLocation();
    const { data: product } = useGetProductByIdQuery(state);
    const { data: info } = useGetAboutInfoQuery();
    const matches = useMediaQuery(MAX_WIDTH_MD);

    const breadcrumbsPaths = [
        ...paths,
        ...[
            {
                name: product?.category.title ?? '',
                path: '/catalog',
            },
            { name: product?.title ?? '', path: `/product/${product?.slug}` },
        ],
    ];

    return (
        <div>
            <div className={'container'}>
                <Breadcrumbs paths={breadcrumbsPaths} className={styles.breadcrumbs} />
                <div className={'sections'}>
                    {product && <ProductDetails product={product} />}
                    {info && <AdvantagesDCMining advantages={info.advantages} />}
                    {!matches && <RecentProductsList />}
                    <CallMeBanner />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
