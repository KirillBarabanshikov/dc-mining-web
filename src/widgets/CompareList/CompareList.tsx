import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Switch } from '@/shared/ui';
import { IProduct, ProductCompareCard } from '@/entities/product';
import { useCompareProductsMutation } from '@/entities/product/api';
import { useAppSelector } from '@/shared/lib';
import styles from './CompareList.module.scss';

export const CompareList = () => {
    const [isOn, setIsOn] = useState(false);
    const [compareList, setCompareList] = useState<IProduct[]>([]);
    const { compare } = useAppSelector((state) => state.products);
    const [compareProducts] = useCompareProductsMutation();

    useEffect(() => {
        setProducts();
    }, [compare]);

    const setProducts = async () => {
        if (compare.length) {
            await compareProducts(compare)
                .unwrap()
                .then((data) => setCompareList(data));
        } else {
            setCompareList([]);
        }
    };

    return (
        <>
            <div className={styles.wrap}>
                <span>Только отличия</span>
                <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
            </div>
            <ScrollContainer className={styles.list}>
                {compareList.map((product) => {
                    return <ProductCompareCard key={product.id} product={product} onlyDifference={isOn} />;
                })}
            </ScrollContainer>
        </>
    );
};
