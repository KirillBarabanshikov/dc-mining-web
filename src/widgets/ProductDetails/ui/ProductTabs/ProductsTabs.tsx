import { FC, useState } from 'react';
import clsx from 'clsx';
import { IProduct, IProductValue } from '@/entities/product';
import { DeliveryAndPayment } from '@/widgets';
import styles from './ProductsTabs.module.scss';

interface IProductTabsProps {
    product: IProduct;
}

const tabs = ['Описание', 'Характеристики', 'Доставка и Оплата'];

export const ProductsTabs: FC<IProductTabsProps> = ({ product }) => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className={styles.productTabs}>
            <div className={clsx(styles.tabs, 'scrollbar-hide')}>
                {tabs.map((tab, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => setCurrentTab(index)}
                            className={clsx(styles.tab, currentTab === index && styles.active)}
                        >
                            {tab}
                        </div>
                    );
                })}
            </div>
            <div>
                {
                    [
                        <ProductDescription description={product.description} />,
                        <ProductSpecifications value={product.value} />,
                        <DeliveryAndPayment />,
                    ][currentTab]
                }
            </div>
        </div>
    );
};

const ProductDescription: FC<{ description: string }> = ({ description }) => {
    return <div className={styles.productDescription} dangerouslySetInnerHTML={{ __html: description }} />;
};

const ProductSpecifications: FC<{ value: IProductValue[] }> = ({ value }) => {
    return (
        <div className={styles.productSpecifications}>
            {value.map((value) => {
                return (
                    <div key={value.id} className={styles.specification}>
                        <div className={styles.name}>{value.valueInKey}</div>
                        <div className={styles.value}>
                            {value.title} {value.unitInKey}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
