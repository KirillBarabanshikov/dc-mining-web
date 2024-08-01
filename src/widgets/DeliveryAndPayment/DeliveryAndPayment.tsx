import CreditCardIcon from '@/shared/assets/icons/credit-card.svg?react';
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
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <CreditCardIcon />
                            <p>Кредитная карта</p>
                        </div>
                        <p className={styles.desc}>
                            вы можете оплатить свой заказ с помощью кредитной карты Visa или Mastercard
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <CreditCardIcon />
                            <p>Дебетовая карта</p>
                        </div>
                        <p className={styles.desc}>
                            вы можете оплатить свой заказ с помощью дебетовой карты, привязанной к вашему банковскому
                            счету
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <BankIcon />
                            <p>Банковский перевод</p>
                        </div>
                        <p className={styles.desc}>
                            вы можете оплатить свой заказ напрямую со своего банковского счета на счет компании
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <WalletIcon />
                            <p>В офисе компании</p>
                        </div>
                        <p className={styles.desc}>
                            вы можете оплатить свой заказа в центральном офисе компании по адресу: г. Москва, ул.
                            Лётная, 99 ст3, офис №4
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Доставка</h2>
                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <TruckIcon />
                            <p>Самовывоз</p>
                        </div>
                        <p className={styles.desc}>
                            Чтобы получить заказ от DC Mining самостоятельно, вы можете выбрать вариант самовывоза.
                            После того, как вам позвонит менеджер и подтвердит наличие товара, можете приехать и забрать
                            свой заказ. Центральный офис компании DC Mining находится в Москве, по адресу: ул. Проспект
                            мира, 99 ст3, офис 4.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <TruckIcon />
                            <p>Доставка CDEK</p>
                        </div>
                        <p className={styles.desc}>
                            Доставка товара транспортной компанией – популярный вариант доставки по РФ или СНГ. Этот
                            способ предполагает использование сторонней транспортной компании для перевозки. Доставка
                            осуществляется до ближайшего к вам пункта выдачи в вашем городе или на указанный вами адрес.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <TruckIcon />
                            <p>Доставка “Деловые линии”</p>
                        </div>
                        <p className={styles.desc}>
                            Доставка осуществляется транспортной компанией “Деловые линии” до выбранного пункта выдачи в
                            вашем городе.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
