import { FC, ReactNode } from 'react';
import CardIcon from '@/shared/assets/icons/credit-card.svg?react';
import BankIcon from '@/shared/assets/icons/bank.svg?react';
import WalletIcon from '@/shared/assets/icons/wallet.svg?react';
import TruckIcon from '@/shared/assets/icons/truck.svg?react';
import styles from './DeliveryAndPayment.module.scss';

export const DeliveryAndPayment = () => {
    return (
        <div className={styles.delivery}>
            <section>
                <h2>Оплата</h2>
                <div className={styles.wrap}>
                    {payments.map((data) => {
                        return <DeliveryAndPaymentCard key={data.id} data={data} />;
                    })}
                </div>
            </section>
            <section>
                <h2>Доставка</h2>
                <div className={styles.wrap}>
                    {deliveries.map((data) => {
                        return <DeliveryAndPaymentCard key={data.id} data={data} />;
                    })}
                </div>
            </section>
        </div>
    );
};

interface IDeliveryCardProps {
    data: IDeliveryAndPayment;
}

const DeliveryAndPaymentCard: FC<IDeliveryCardProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                {data.icon}
                <p>{data.title}</p>
            </div>
            <p className={styles.desc}>{data.description}</p>
        </div>
    );
};

interface IDeliveryAndPayment {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
}

const payments: IDeliveryAndPayment[] = [
    {
        id: 1,
        icon: <CardIcon />,
        title: 'Кредитная карта',
        description: 'Вы можете оплатить свой заказ с помощью кредитной карты Visa или Mastercard',
    },
    {
        id: 2,
        icon: <CardIcon />,
        title: 'Дебетовая карта',
        description: 'Вы можете оплатить свой заказ с помощью дебетовой карты, привязанной к вашему банковскому счету',
    },
    {
        id: 3,
        icon: <BankIcon />,
        title: 'Банковский перевод',
        description: 'Вы можете оплатить свой заказ напрямую со своего банковского счета на счет компании',
    },
    {
        id: 4,
        icon: <WalletIcon />,
        title: 'В офисе компании',
        description:
            'Вы можете оплатить свой заказа в центральном офисе компании по адресу: г. Москва, ул. Лётная, 99 ст3, офис №4',
    },
];

const deliveries: IDeliveryAndPayment[] = [
    {
        id: 1,
        icon: <TruckIcon />,
        title: 'Самовывоз',
        description:
            'Чтобы получить заказ от DC Mining самостоятельно, вы можете выбрать вариант самовывоза. После того, как вам позвонит менеджер и подтвердит наличие товара, можете приехать и забрать свой заказ. Центральный офис компании DC Mining находится в Москве, по адресу: ул. Проспект мира, 99 ст3, офис 4.',
    },
    {
        id: 2,
        icon: <TruckIcon />,
        title: 'Доставка CDEK',
        description:
            'Доставка товара транспортной компанией – популярный вариант доставки по РФ или СНГ. Этот способ предполагает использование сторонней транспортной компании для перевозки. Доставка осуществляется до ближайшего к вам пункта выдачи в вашем городе или на указанный вами адрес.',
    },
    {
        id: 3,
        icon: <TruckIcon />,
        title: 'Доставка “Деловые линии”',
        description:
            'Доставка осуществляется транспортной компанией “Деловые линии” до выбранного пункта выдачи в вашем городе.',
    },
];
