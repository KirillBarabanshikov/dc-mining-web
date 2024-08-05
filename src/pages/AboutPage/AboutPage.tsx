import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { AdvantagesDCMinig, LogoAnimationBanner } from '@/widgets';
import { useMediaQuery } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { MAX_WIDTH_MD } from '@/shared/consts';
import newsImg from '@/shared/assets/images/news/news.png';
import bitmain from '@/shared/assets/images/partners/bitmain.png';
import canaan from '@/shared/assets/images/partners/canaan.png';
import goldshell from '@/shared/assets/images/partners/goldshell.png';
import microbt from '@/shared/assets/images/partners/microbt.png';
import innosilocon from '@/shared/assets/images/partners/innosilocon.png';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <>
            <LogoAnimationBanner />
            <div className={'sections'}>
                <section className={styles.about}>
                    <div className={'container'}>
                        <h2 className={'section-title-primary'}>О компании</h2>
                        <div className={styles.wrap}>
                            <div className={styles.placeholder}></div>
                            <p>
                                Товарищи! сложившаяся структура организации обеспечивает широкому кругу (специалистов)
                                участие в формировании модели развития. Равным образом постоянный количественный рост и
                                сфера нашей активности влечет за собой процесс внедрения и модернизации системы обучения
                                кадров, соответствует насущным потребностям. Равным образом сложившаяся структура
                                организации играет важную роль в формировании существенных финансовых и административных
                                условий.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                <AdvantagesDCMinig />
                <section className={styles.news}>
                    <div className={'container'}>
                        <div className={styles.newsTitle}>
                            <h2 className={'section-title-primary'}>СМИ о нас</h2>
                            {!matches && <Button>Больше новостей</Button>}
                        </div>
                        <div className={styles.wrap}>
                            <article className={styles.newsCard}>
                                <img src={`${newsImg}`} alt={'News'} />
                                <div className={styles.cardBody}>
                                    <time dateTime={''}>31 мая 2024</time>
                                    <h5 className={styles.title}>
                                        «Обречена на популярность»: перспективы технологии майнинга
                                    </h5>
                                    <p className={styles.subtitle}>
                                        Россия может подняться в рейтинге стран по майнингу криптовалют, когда будет
                                        принят соответствующий закон об отраслевом регулировании. Основатель о том, что
                                        сдерживает рост российского рынка, и продуктах компании.
                                    </p>
                                </div>
                            </article>
                            <article className={styles.newsCard}>
                                <img src={`${newsImg}`} alt={'News'} />
                                <div className={styles.cardBody}>
                                    <time dateTime={''}>31 мая 2024</time>
                                    <h5 className={styles.title}>
                                        «Обречена на популярность»: перспективы технологии майнинга
                                    </h5>
                                    <p className={styles.subtitle}>
                                        Россия может подняться в рейтинге стран по майнингу криптовалют, когда будет
                                        принят соответствующий закон об отраслевом регулировании. Основатель о том, что
                                        сдерживает рост российского рынка, и продуктах компании.
                                    </p>
                                </div>
                            </article>
                            <article className={styles.newsCard}>
                                <img src={`${newsImg}`} alt={'News'} />
                                <div className={styles.cardBody}>
                                    <time dateTime={''}>31 мая 2024</time>
                                    <h5 className={styles.title}>
                                        «Обречена на популярность»: перспективы технологии майнинга
                                    </h5>
                                    <p className={styles.subtitle}>
                                        Россия может подняться в рейтинге стран по майнингу криптовалют, когда будет
                                        принят соответствующий закон об отраслевом регулировании. Основатель о том, что
                                        сдерживает рост российского рынка, и продуктах компании.
                                    </p>
                                </div>
                            </article>
                        </div>
                        {matches && (
                            <Button size={'md'} isWide className={styles.button}>
                                Больше новостей
                            </Button>
                        )}
                    </div>
                </section>
                <section className={styles.partners}>
                    <div className={'container'}>
                        <h2 className={clsx(styles.title, 'section-title-primary')}>Партнеры</h2>

                        <Swiper
                            spaceBetween={32}
                            breakpoints={{
                                0: { slidesPerView: 1.8 },
                                425: { slidesPerView: 2 },
                                500: { slidesPerView: 2.8 },
                                600: { slidesPerView: 3 },
                                768: { slidesPerView: 2.5 },
                                900: { slidesPerView: 3 },
                                1500: { slidesPerView: 5 },
                            }}
                        >
                            <SwiperSlide>
                                <div className={styles.partner}>
                                    <img src={`${bitmain}`} alt={'bitmain'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.partner}>
                                    <img src={`${canaan}`} alt={'canaan'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.partner}>
                                    <img src={`${goldshell}`} alt={'goldshell'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.partner}>
                                    <img src={`${microbt}`} alt={'microbt'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.partner}>
                                    <img src={`${innosilocon}`} alt={'innosilocon'} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
