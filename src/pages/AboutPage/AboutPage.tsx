import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';
import { AdvantagesDCMining, LogoAnimationBanner } from '@/widgets';
import { useMediaQuery } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { BASE_URL, MAX_WIDTH_MD } from '@/shared/consts';
import { useGetAboutInfoQuery } from '@/entities/pageInfo';
import { useNavigate } from 'react-router-dom';
import { NewsCard } from '@/entities/news';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const { data: info } = useGetAboutInfoQuery();
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>О компании</title>
                <meta name='description' content={'О компании'} />
            </Helmet>
            <LogoAnimationBanner />
            <div className={'sections'}>
                <section className={styles.about}>
                    <div className={clsx(styles.abouts, 'container')}>
                        {info &&
                            info.main.map((element) => {
                                return (
                                    <div key={element.id} className={styles.wrap}>
                                        <div className={styles.image}>
                                            <img src={BASE_URL + element.image} alt={element.title} />
                                        </div>
                                        <div className={styles.description}>
                                            <h2 className={'section-title-primary'}>{element.title}</h2>
                                            <p dangerouslySetInnerHTML={{ __html: element.description }} />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </section>
                <AdvantagesDCMining advantages={info?.advantages} />
                <section className={styles.news}>
                    <div className={'container'}>
                        <div className={styles.newsTitle}>
                            <h2 className={'section-title-primary'}>СМИ о нас</h2>
                            {!matches && <Button onClick={() => navigate('/news')}>Больше новостей</Button>}
                        </div>
                        <div className={styles.wrap}>
                            {info &&
                                info.massMedia
                                    .filter((media) => media.display)
                                    .map((media) => {
                                        return <NewsCard key={media.id} media={media} />;
                                    })}
                        </div>
                        {matches && (
                            <Button size={'md'} isWide onClick={() => navigate('/news')} className={styles.button}>
                                Больше новостей
                            </Button>
                        )}
                    </div>
                </section>
                <section className={styles.partners}>
                    <div className={'container scrollable'}>
                        <h2 className={clsx(styles.title, 'section-title-primary')}>Партнеры</h2>

                        <Swiper slidesPerView={'auto'} spaceBetween={32} className={styles.partnersList}>
                            {info &&
                                info.partners.map((partner) => {
                                    return (
                                        <SwiperSlide key={partner.id} className={styles.slide}>
                                            <div className={styles.partner}>
                                                <img
                                                    src={BASE_URL + partner.image}
                                                    alt={'image'}
                                                    className={styles.image}
                                                />
                                                <img
                                                    src={BASE_URL + partner.preview}
                                                    alt={'preview'}
                                                    className={styles.preview}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
