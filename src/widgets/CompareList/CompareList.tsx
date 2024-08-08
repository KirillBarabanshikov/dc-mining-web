import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Switch } from '@/shared/ui';
import { ProductCompareCard } from '@/entities/product';
import { useCompareProductsMutation } from '@/entities/product/api';
import { RootState } from '@/shared/types';
import styles from './CompareList.module.scss';

export const CompareList = () => {
    const [isOn, setIsOn] = useState(false);
    const compare: number[] = useSelector((state: RootState) => state.products.compare);
    const [compareProducts, { data: products }] = useCompareProductsMutation();

    useEffect(() => {
        compare.length && compareProducts(compare);
    }, [compare, compareProducts]);

    return (
        <>
            <div className={styles.wrap}>
                <span>Только отличия</span>
                <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
            </div>
            <ScrollContainer className={styles.list}>
                {products &&
                    !!compare.length &&
                    products.map((product) => {
                        return <ProductCompareCard key={product.id} product={product} onlyDifference={isOn} />;
                    })}
            </ScrollContainer>
        </>
    );
};
