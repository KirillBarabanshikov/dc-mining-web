import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Button, Switch } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { RecentProductsList } from '@/widgets';
import { RootState } from '@/shared/types';
import { clearCompare, ProductCompareCard } from '@/entities/product';
import { useCompareProductsMutation } from '@/entities/product/api';
import styles from './ComparePage.module.scss';

const ComparePage = () => {
    const [isOn, setIsOn] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const compare: number[] = useSelector((state: RootState) => state.products.compare);
    const [compareProducts, { data: products }] = useCompareProductsMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        compare.length && compareProducts(compare);
    }, [compare, compareProducts]);

    return (
        <div className={'sections'}>
            <section className={styles.compare}>
                <div className={'container'}>
                    <div className={styles.head}>
                        <h1 className={'section-title-secondary'}>Сравнение</h1>
                        <Button
                            variant={'outline'}
                            size={matches ? 'sm' : 'md'}
                            onClick={() => dispatch(clearCompare())}
                        >
                            Очистить
                        </Button>
                    </div>
                    <div className={styles.wrap}>
                        <span>Только отличия</span>
                        <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
                    </div>
                    <ScrollContainer className={styles.list}>
                        {products &&
                            products.map((product) => {
                                return <ProductCompareCard key={product.id} product={product} onlyDifference={isOn} />;
                            })}
                    </ScrollContainer>
                </div>
            </section>
            <RecentProductsList />
        </div>
    );
};

export default ComparePage;
