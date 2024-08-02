import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_XL } from '@/shared/consts';
import miners from '@/shared/assets/images/slides/miners.png';
import minersMd from '@/shared/assets/images/slides/miners-md.png';
import miner from '@/shared/assets/images/slides/miner.png';
import minerMd from '@/shared/assets/images/slides/miner-md.png';
import clouds from '@/shared/assets/images/slides/clouds.png';
import cloudsMd from '@/shared/assets/images/slides/clouds-md.png';
import dataCenter from '@/shared/assets/images/slides/data-center.png';
import dataCenterMd from '@/shared/assets/images/slides/data-center-md.png';
import Background from '@/shared/assets/backgrounds/main-banner-bg.svg?react';
import styles from './MainBanner.module.scss';
import clsx from 'clsx';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

export const MainBanner = () => {
    const matches = useMediaQuery(MAX_WIDTH_XL);

    return (
        <>
            <div className={clsx(styles.banner, 'main-banner')}>
                <Swiper
                    effect={'fade'}
                    modules={[EffectFade, Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <section className={styles.slide}>
                            <div className={styles.slideContent}>
                                <h2>
                                    Размещение вашего оборудования <span>в дата центре</span>
                                </h2>
                                <ul className={'list'}>
                                    <li>Официальное размещение от 4,7 руб/кВт</li>
                                    <li>Вооруженная охрана</li>
                                    <li>Профессиональный сервис-центр</li>
                                    <li>Более 1000 устройств в обслуживании</li>
                                </ul>
                                <Button className={styles.button} size={matches ? 'md' : 'lg'}>
                                    Подробнее
                                </Button>
                            </div>
                            <div className={styles.imageWrap}>
                                <img src={`${matches ? minersMd : miners}`} alt={'Оборудование'} />
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={styles.slide}>
                            <div className={styles.slideContent}>
                                <h2>
                                    Продажа <span>оборудования и комплектующих</span> для майнинга
                                </h2>
                                <ul className={'list'}>
                                    <li>Прямые поставки от производителей</li>
                                    <li>Официальный ввоз с ГТД</li>
                                    <li>Гибкая система скидок</li>
                                </ul>
                                <Button className={styles.button} size={matches ? 'md' : 'lg'}>
                                    Подробнее
                                </Button>
                            </div>
                            <div className={styles.imageWrap}>
                                <img src={`${matches ? minerMd : miner}`} alt={'Оборудование'} />
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={styles.slide}>
                            <div className={styles.slideContent}>
                                <h2>
                                    <span>Облачный</span> майнинг
                                </h2>
                                <ul className={'list'}>
                                    <li>Экономия на затратах э/э до 15%</li>
                                    <li>Не нужно ждать доставки оборудования</li>
                                    <li>Начните зарабатывать с 1 дня</li>
                                </ul>
                                <Button className={styles.button} size={matches ? 'md' : 'lg'}>
                                    Подробнее
                                </Button>
                            </div>
                            <div className={styles.imageWrap}>
                                <img src={`${matches ? cloudsMd : clouds}`} alt={'Оборудование'} />
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className={styles.slide}>
                            <div className={styles.slideContent}>
                                <h2>
                                    <span>Конейнеры</span> для размещения оборудования
                                </h2>
                                <ul className={'list'}>
                                    <li>Максимальная нагрузка до 1,5 мВт</li>
                                    <li>Вместимость до от 100 до 400 штук</li>
                                    <li>Принудительная вентиляция</li>
                                    <li>Видеонаблюдение</li>
                                    <li>Автоматика</li>
                                </ul>
                                <Button className={styles.button} size={matches ? 'md' : 'lg'}>
                                    Подробнее
                                </Button>
                            </div>
                            <div className={styles.imageWrap}>
                                <img src={`${matches ? dataCenterMd : dataCenter}`} alt={'Оборудование'} />
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
                <div className='swiper-pagination'></div>
            </div>
            <Background className={styles.bg} />
        </>
    );
};
