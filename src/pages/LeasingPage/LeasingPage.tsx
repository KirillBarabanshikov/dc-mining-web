import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { useMediaQuery } from '@/shared/lib';
import { EMAIL, MAX_WIDTH_LG, MAX_WIDTH_MD, TELEPHONE, TELEPHONE_LINK } from '@/shared/consts';
import dottedLine from '@/shared/assets/images/leasing/dotted-line.png';
import dottedLine2 from '@/shared/assets/images/leasing/dotted-line2.png';
import dottedLineMd from '@/shared/assets/images/leasing/dotted-line-md.png';
import dottedLineMd2 from '@/shared/assets/images/leasing/dotted-line-md2.png';
import dottedLineSm from '@/shared/assets/images/leasing/dotted-line-sm.png';
import dottedLineSm2 from '@/shared/assets/images/leasing/dotted-line-sm2.png';
import styles from './Leasing.module.scss';
import { Link } from 'react-router-dom';

const LeasingPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const matchesMd = useMediaQuery('(max-width: 854px)');
    const matchesLg = useMediaQuery(MAX_WIDTH_LG);

    const currentLine = matchesMd ? dottedLineSm : matchesLg ? dottedLineMd : dottedLine;
    const currentLine2 = matchesMd ? dottedLineSm2 : matchesLg ? dottedLineMd2 : dottedLine2;

    return (
        <div className={'sections'}>
            <section className={styles.leasingBanner}>
                <div className={clsx(styles.leasingContainer, 'container')}>
                    <h1>Лизинг</h1>
                    <p>
                        Благодаря лизингу вы можете получить столько асиков, сколько захотите, не оплачивая их стоимость
                        сразу. Начните зарабатывать на майнинге <span>сейчас</span> — и выкупите оборудование{' '}
                        <span>позже</span>
                    </p>
                    <Button size={matches ? 'md' : 'lg'} isWide={matches}>
                        Получить консультацию
                    </Button>
                </div>
                <div className={styles.background}></div>
            </section>
            <div className={styles.leasingInfo}>
                <div className={'container'}>
                    <div className={styles.wrap}>
                        <div className={styles.infoItem}>
                            <p className={styles.title}>Для кого</p>
                            <p className={styles.subtitle}>Для юридических лиц</p>
                        </div>
                        <div className={styles.infoItem}>
                            <p className={styles.title}>Срок</p>
                            <p className={styles.subtitle}>От 1 до 2 лет</p>
                        </div>
                        <div className={styles.infoItem}>
                            <p className={styles.title}>Сумма</p>
                            <p className={styles.subtitle}>От 600 000 ₽</p>
                        </div>
                        <div className={styles.infoItem}>
                            <p className={styles.title}>Первый взнос</p>
                            <p className={styles.subtitle}>От 20%</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.leasingDesc}>
                <div className={'container'}>
                    <h2 className={clsx(styles.title, 'section-title-primary')}>
                        Лизинг для юридических лиц — это ещё и <span>экономия</span>
                    </h2>
                    <div className={styles.wrap}>
                        <div className={styles.item}>
                            <div className={styles.number}>1</div>
                            <p>
                                Сокращение трат на налоги. Лизинговые платежи включают НДС, поэтому{' '}
                                <span>вам вернётся 20%</span> от оплаченной суммы. Из-за роста расходной части снижается
                                налог на прибыль.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.number}>2</div>
                            <p>С лизингом вы экономите на хостинге и электричестве: платите на 20% меньше.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.leasingHowItWork}>
                <div className={'container'}>
                    <h2 className={clsx(styles.title, 'section-title-primary')}>Как работает лизинг</h2>
                    <div className={styles.wrap}>
                        <div className={styles.item}>
                            <div className={styles.number}>1</div>
                            <p>Мы подбираем оборудование и высылаем вам коммерческое предложение.</p>
                            <img src={`${currentLine}`} alt={'Line'} className={styles.dottedLine} />
                        </div>
                        <div className={styles.item}>
                            <div className={styles.number}>2</div>
                            <p>Собираем документы: менеджер подскажет, что входит в комплект.</p>
                            <img
                                src={`${currentLine}`}
                                alt={'Line'}
                                className={clsx(styles.dottedLine, styles.bottom)}
                            />
                        </div>
                        <div className={styles.item}>
                            <div className={styles.number}>3</div>
                            <p>Согласовываем условия финансирования, страхования и доставки.</p>
                            <img src={`${currentLine}`} alt={'Line'} className={styles.dottedLine} />
                        </div>
                        <div className={styles.item}>
                            <div className={styles.number}>4</div>
                            <p>Заключаем договор, после чего вы вносите аванс</p>
                            <img
                                src={`${currentLine2}`}
                                alt={'Line'}
                                className={clsx(styles.dottedLine, styles.dottedLineFinal)}
                            />
                        </div>
                        <div className={clsx(styles.item, styles.finalItem)}>
                            <div className={styles.number}>5</div>
                            <p>
                                Поставляем оборудование — а вы начинаете получать доход 65% годовых и вносить комфортные
                                платежи по графику
                            </p>
                            <Button>Получить консультацию</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contactsBanner}>
                <div className={clsx(styles.wrap, 'container')}>
                    <div className={styles.content}>
                        <h2>Хотите узнать, подойдёт ли лизинг вашей компании?</h2>
                        <p>
                            <span>Свяжитесь с нами </span> — мы индивидуально обсудим условия сотрудничества
                        </p>
                        <div className={styles.links}>
                            <Link to={`tel:${TELEPHONE_LINK}`}>{TELEPHONE}</Link>
                            <Link to={`mailto:${EMAIL}`}>{EMAIL}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeasingPage;
