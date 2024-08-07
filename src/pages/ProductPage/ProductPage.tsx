import { useState } from 'react';
import clsx from 'clsx';
import { Badge, Breadcrumbs, Button, IconButton } from '@/shared/ui';
import { AdvantagesDCMining, CallMeBanner, DeliveryAndPayment, RecentProductsList } from '@/widgets';
import img from '@/widgets/Bestsellers/img.png';
import img2 from '@/entities/product/ui/ProductCard/img.png';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic2.svg?react';
import ShareIcon from '@/shared/assets/icons/share.svg?react';
import styles from './ProductPage.module.scss';
import { OrderProductModal } from '@/features/product/orderProduct/ui/OrderProductModal';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';

const images = [img, img2, img, img2, img, img2];

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'ASIC майнеры', path: '/catalog' },
    { name: 'Antminer S19k Pro – 120 TH', path: '/product' },
];

const ProductPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div>
            <div className={'container'}>
                <Breadcrumbs paths={paths} className={styles.breadcrumbs} />
                <div className={'sections'}>
                    <div>
                        <ProductInfo />
                        <ProductTabs />
                    </div>
                    <AdvantagesDCMining />
                    {!matches && <RecentProductsList />}
                    <CallMeBanner />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

const ProductInfo = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.productInfo}>
            <div className={styles.slider}>
                <div className={clsx(styles.images, 'scrollbar-hide')}>
                    {images.map((image, index) => {
                        return (
                            <img
                                src={`${image}`}
                                alt={'image'}
                                onClick={() => setCurrentImage(index)}
                                className={clsx(currentImage === index && styles.selected)}
                            />
                        );
                    })}
                </div>
                <div className={styles.mainImage}>
                    <img src={`${images[currentImage]}`} alt={'image'} />
                </div>
            </div>
            <section className={styles.info}>
                <div className={styles.tags}>
                    <Badge text={'В наличии'} theme={'green'} />
                    <Badge text={'Скидка — 15% '} theme={'red'} />
                    <Badge text={'Новинка'} theme={'blue'} />
                </div>
                <div className={styles.content}>
                    <h1>Antminer S19k Pro – 120 TH</h1>
                    <div className={styles.specifications}>
                        <div className={styles.specification}>
                            <p className={styles.name}>Хешрейт</p>
                            <p className={styles.value}>120 TH/S</p>
                        </div>
                        <div className={styles.specification}>
                            <p className={styles.name}>Алгоритм</p>
                            <p className={styles.value}>SHA-256</p>
                        </div>
                        <div className={styles.specification}>
                            <p className={styles.name}>Монета</p>
                            <p className={styles.value}>BTC/BCH/BSV</p>
                        </div>
                        <div className={styles.specification}>
                            <p className={styles.name}>Потребление</p>
                            <p className={styles.value}>2760 ± 10% Вт/ч</p>
                        </div>
                    </div>
                    <div>
                        <p className={styles.description}>
                            Алгоритм, на котором работает устройство SHA-256 — предназначен для добычи таких
                            востребованных криптовалют, как ВТС, ВСН, LСС и других криптовалют, работающих на этом
                            алгоритме. Созданный с соблюдением высоких стандартов, майнер обеспечивает надежную и
                            стабильную работу. При этом потребляемая мощность составляет всего 2760Вт, при температуре
                            25°C, что подчеркивает эффективность его работы.
                        </p>
                        <span className={styles.more}>Подробнее</span>
                    </div>
                    <div>
                        <span className={styles.oldPrice}>163 620 ₽</span>
                        <p className={styles.price}>163 620 ₽</p>
                    </div>
                    <div className={styles.buttons}>
                        <Button size={'sm'} className={styles.button} onClick={() => setIsOpen(true)}>
                            Заказать
                        </Button>
                        <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                        <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
                        <IconButton icon={<ShareIcon />} className={styles.iconButton} />
                    </div>
                </div>
            </section>
            <OrderProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

const tabs = ['Описание', 'Характеристики', 'Доставка и Оплата'];

const ProductTabs = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className={styles.productTabs}>
            <div className={styles.tabs}>
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
            <div>{[<ProductDescription />, <ProductSpecifications />, <DeliveryAndPayment />][currentTab]}</div>
        </div>
    );
};

const ProductDescription = () => {
    return (
        <div className={styles.productDescription}>
            <section>
                <h4>Возможности устройства Antminer S19k Pro</h4>
                <p>
                    BITMAIN в этот раз выпустили еще одно устройство что при энергоэфективности 23±5% J/TH практически
                    превосходит все предыдущие модели. Хешрейт 120Th при потреблении 2760W. Практически тот же самый
                    S19XP на 140Th, но дешевле, а потребление и хешрейт практически идентичные.
                </p>
            </section>
            <section>
                <h5>О товаре</h5>
                <p>
                    Bitcoin Miner S19k Pro – это мощный и эффективный ASIC-майнер, разработанный для добычи криптовалюты
                    на алгоритме SHA256. С его хешрейтом в 115TH/s и энергоэффективностью на уровне 23 J/TH, S19k Pro
                    представляет собой отличное решение для майнинга криптовалют.
                </p>
            </section>
            <section>
                <h5>Какую криптовалюту можно добывать</h5>
                <p>
                    Алгоритм, на котором работает устройство SHA-256 — предназначен для добычи таких востребованных
                    криптовалют, как ВТС, ВСН, LСС и других криптовалют, работающих на этом алгоритме.
                </p>
            </section>
            <section>
                <h5>Особенности оборудования</h5>
                <p>
                    Созданный с соблюдением высоких стандартов, майнер обеспечивает надежную и стабильную работу. При
                    этом потребляемая мощность составляет всего 2645Вт, при температуре 25°C, что подчеркивает
                    эффективность его работы. S19k Pro имеет компактные размеры, равные 400 мм в длину, 195 мм в ширину
                    и 290 мм в высоту без упаковки. Вес майнера составляет 12.85 кг, а с упаковкой – 14.5 кг. Это
                    позволяет удобно размещать и транспортировать устройство. Майнер обладает широкими рабочими
                    параметрами, включая температурный диапазон от 0°C до 40°C, который обеспечивает надежную работу в
                    различных условиях. Также, благодаря тщательной разработке, он может функционировать при
                    относительно высокой влажности от 20% до 80%, предотвращая конденсацию. В целом, Bitcoin Miner S19k
                    Pro сочетает в себе высокую производительность, эффективность и надежность.
                </p>
            </section>
            <section>
                <h5>Где лучше всего поставить данное оборудование</h5>
                <p>
                    Несмотря на высокую энергоэффективность размещать данное устройство лучше в хорошо проветриваемом
                    нежилом помещении, так как мощные вентиляторы будут активно охлаждать вычислительный процессор.
                    Также желательно защитить его от пыли и грязи.
                </p>
            </section>
            <section>
                <h5>О производителе</h5>
                <p>
                    Производитель данного оборудования мировой лидер в области майнинга, компания Bitmain. Компания
                    славится передовыми технологиями в области вычислительной техники и надежностью своего оборудования.
                </p>
            </section>
            <section>
                <h3>Почему выгодно работать с DC Mining</h3>
                <p>
                    Мы предоставляем возможность заказать топовые асики из Китая, по предоплате всего 30%. Основными
                    этапами оформления заказа на покупку майнеров являются: заключение договора комиссии и перевод
                    средств для закупки товара (может осуществляться в рублях, валюте и криптовалюте), закупка и
                    проверка оборудования, передача майнеров на дальнейшую доставку. Каждый этап сопровождается
                    видеоотчетами о проделанной работе с нашей стороны. Кроме того, мы – одна из немногих компаний,
                    которые занимаются гарантийным обслуживанием проданного оборудования. Если ваш асик выйдет из строя,
                    мы отремонтируем его за несколько дней (касается только гарантийных случаев). Чтобы оформить заказ
                    или узнать подробную информацию – обратитесь на нашу горячую линию или заполните форму обратной
                    связи. А для расчета доходности и окупаемости устройств – воспользуйтесь калькулятором майнинга.
                </p>
            </section>
        </div>
    );
};

const ProductSpecifications = () => {
    return (
        <div className={styles.productSpecifications}>
            {Array.from({ length: 12 }).map((_, index) => {
                return (
                    <div key={index} className={styles.specification}>
                        <div className={styles.name}>Алгоритм</div>
                        <div className={styles.value}>SHA-256</div>
                    </div>
                );
            })}
        </div>
    );
};
