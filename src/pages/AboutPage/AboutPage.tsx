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
                    <div className={clsx(styles.abouts, 'container')}>
                        {info &&
                            Array.from({ length: 5 }).map((_, index) => {
                                return (
                                    <div key={index} className={styles.wrap}>
                                        <div className={styles.image}>
                                            <img src={BASE_URL + info.image} alt={''} />
                                        </div>
                                        <div className={styles.description}>
                                            <h2 className={'section-title-primary'}>О компании</h2>
                                            <p>
                                                Товарищи! сложившаяся структура организации обеспечивает широкому кругу
                                                (специалистов) участие в формировании модели развития. Равным образом
                                                постоянный количественный рост и сфера нашей активности влечет за собой
                                                процесс внедрения и модернизации системы обучения кадров, соответствует
                                                насущным потребностям. Равным образом сложившаяся структура организации
                                                играет важную роль в формировании существенных финансовых и
                                                административных условий.
                                            </p>
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

                        <ScrollContainer className={clsx(styles.partnersList)}>
                            {info &&
                                info.partners.map((partner) => {
                                    return (
                                        <div key={partner.id} className={styles.partner}>
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
