import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/ui';
import { AdvantagesDCMining, CallMeBanner, ProductDetails, RecentProductsList } from '@/widgets';
import { useAppDispatch, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { addToRecent, useGetProductByIdQuery } from '@/entities/product';
import { useGetAboutInfoQuery } from '@/entities/pageInfo';
import styles from './ProductPage.module.scss';

const paths = [{ name: 'Главная', path: '/' }];

const ProductPage = () => {
    const { id } = useParams();
    const { data: product } = useGetProductByIdQuery(id as string);
    const { data: info } = useGetAboutInfoQuery();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const dispatch = useAppDispatch();

    useEffect(() => {
        product && dispatch(addToRecent(product));
    }, [product]);

    const breadcrumbsPaths = [
        ...paths,
        { name: 'ASIC майнеры', path: '' },
        { name: product?.title ?? '', path: `/product/${product?.id}/${product?.slug}` },
    ];

    return (
        <div className={'container'}>
            <Breadcrumbs paths={breadcrumbsPaths} className={styles.breadcrumbs} />
            <div className={'sections'}>
                {product && <ProductDetails product={product} />}
                {info && <AdvantagesDCMining advantages={info.advantages} />}
                {!matches && <RecentProductsList />}
                <CallMeBanner />
            </div>
        </div>
    );
};

export default ProductPage;
