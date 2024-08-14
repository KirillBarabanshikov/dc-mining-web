import clsx from 'clsx';
import ScrollContainer from 'react-indiana-drag-scroll';
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
            <LogoAnimationBanner />
            <div className={'sections'}>
                <section className={styles.about}>
                    <div className={'container'}>
                        <h2 className={'section-title-primary'}>О компании</h2>
                        <div className={styles.wrap}>
                            {info && <img src={BASE_URL + info.image} alt={'About'} />}
                            {info && <p dangerouslySetInnerHTML={{ __html: info.description }} />}
                        </div>
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

                        <ScrollContainer className={clsx(styles.partnersList)}>
                            {info &&
                                info.partners.map((partner) => {
                                    return (
                                        <div
                                            key={partner.id}
                                            className={styles.partner}
                                            style={{
                                                backgroundImage: `url(${BASE_URL + partner.image})`,
                                            }}
                                        />
                                    );
                                })}
                        </ScrollContainer>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
