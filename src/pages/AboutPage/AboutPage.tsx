import React, { useRef } from 'react';
import clsx from 'clsx';
import { useDraggable } from 'react-use-draggable-scroll';
import { AdvantagesDCMinig, LogoAnimationBanner } from '@/widgets';
import { useMediaQuery } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { MAX_WIDTH_MD } from '@/shared/consts';
import newsImg from '@/shared/assets/images/news/news.png';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const { events } = useDraggable(ref);
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
                    <div className={'container scrollable'}>
                        <h2 className={clsx(styles.title, 'section-title-primary')}>Партнеры</h2>

                        <div className={clsx(styles.partnersList, 'scrollbar-hide')} {...events} ref={ref}>
                            {Array.from({ length: 12 }).map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.partner}
                                        style={{
                                            backgroundImage: 'url(src/shared/assets/images/partners/bitmain.png)',
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
