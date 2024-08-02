import { useState } from 'react';
import clsx from 'clsx';
import { Button, Checkbox, Input } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { Advantages } from '@/widgets/Advantages';
import { OrderCallModal } from '@/features/call';
import container from '@/shared/assets/images/containers/container.png';
import dottedLine from '@/shared/assets/images/data-center/dotted-line.png';
import dottedLine2 from '@/shared/assets/images/data-center/dotted-line2.png';
import dottedLineMd from '@/shared/assets/images/data-center/dotted-line-md.png';
import dottedLineMd2 from '@/shared/assets/images/data-center/dotted-line-md2.png';
import dottedLineSm from '@/shared/assets/images/data-center/dotted-line-sm.png';
import dottedLineSm2 from '@/shared/assets/images/data-center/dotted-line-sm2.png';
import miner from '@/shared/assets/images/slides/miner-md.png';
import styles from './DataCenterPage.module.scss';

const DataCenterPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const matchesMd = useMediaQuery('(max-width: 959px)');
    const matchesLg = useMediaQuery('(max-width: 1440px)');

    const currentLine = matchesMd ? dottedLineSm : matchesLg ? dottedLineMd : dottedLine;
    const currentLine2 = matchesMd ? dottedLineSm2 : matchesLg ? dottedLineMd2 : dottedLine2;

    return (
        <>
            <section className={styles.dataCenterBanner}>
                <div className={clsx(styles.dataCenterContainer, 'container')}>
                    <h1>
                        <span>Майнинг-отель</span> по выгодной цене, собственный дата-центр
                    </h1>
                    <ul className={'list'}>
                        <li>Доставка в дата-центр</li>
                        <li>Размещение оборудования</li>
                        <li>Круглосуточная военизированная охрана</li>
                        <li>Обеспечение бесперебойной работы</li>
                    </ul>
                    <Button size={matches ? 'md' : 'lg'} isWide={matches} onClick={() => setIsOpen(true)}>
                        Разместить оборудование
                    </Button>
                </div>
                <div className={styles.background}></div>
            </section>
            <div className={clsx(styles.content, 'sections')}>
                <Advantages as={'data-center'} />
                <div className={styles.benefits}>
                    <div className={'container'}>
                        <div className={styles.wrap}>
                            <div className={styles.item}>
                                <p className={styles.title}>UPTIME 99%</p>
                                <p className={styles.subtitle}>
                                    Обеспечивает высокую надежность: таким образом ваше оборудование не будет
                                    простаивать и будет приносить больше прибыли.
                                </p>
                            </div>
                            <div className={styles.item}>
                                <p className={styles.title}>от 5,5 руб за кВт/час</p>
                                <p className={styles.subtitle}>
                                    Обеспечивает высокую надежность: таким образом ваше оборудование не будет
                                    простаивать и будет приносить больше прибыли.
                                </p>
                            </div>
                            <div className={styles.item}>
                                <p className={styles.title}>24/7</p>
                                <p className={styles.subtitle}>Мониторинг и обслуживание</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={styles.containers}>
                    <div className={'container'}>
                        <div className={styles.wrap}>
                            <div className={styles.containersContent}>
                                <h2 className={'section-title'}>Контейнеры для майнинга</h2>
                                <p>
                                    Если вы планируете размещение более 50 аппаратов, то мы рекомендуем купить отдельный
                                    контейнер
                                </p>
                                <div className={styles.advantages}>
                                    <div className={styles.advantage}>
                                        <div>Срок производства от</div>
                                        <span>14 дней</span>
                                    </div>
                                    <div className={styles.advantage}>
                                        <div>Стоимость от</div>
                                        <span>850 000 ₽</span>
                                    </div>
                                </div>
                                <div className={styles.advantage}>
                                    <div>Вместимость</div>
                                    <span>от 36 до 308 единиц</span>
                                </div>
                                <Button size={matches ? 'md' : 'lg'} isWide={matches} className={styles.button}>
                                    Выбрать контейнер
                                </Button>
                            </div>
                            <img src={`${container}`} alt={'Container'} />
                        </div>
                    </div>
                </section>
                <section className={styles.howItWork}>
                    <div className={'container'}>
                        <h2 className={clsx(styles.title, 'section-title-primary')}>Как это работает</h2>
                        <div className={styles.wrap}>
                            <div className={styles.item}>
                                <div className={styles.number}>
                                    1
                                    <img src={`${currentLine}`} alt={'Line'} className={styles.dottedLine} />
                                </div>
                                <p>Покупаете оборудование в dc-mining.com</p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.number}>
                                    2
                                    <img src={`${currentLine2}`} alt={'Line'} className={styles.dottedLineLarge} />
                                </div>
                                <p>Мы доставляем оборудование в наш дата-центр</p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.number}>
                                    3
                                    <img src={`${currentLine}`} alt={'Line'} className={styles.dottedLine} />
                                </div>
                                <p>Страхуем оборудование</p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.number}>4</div>
                                <p>Настраиваем и размещаем оборудование</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.feedback}>
                    <div className={'container'}>
                        <div className={styles.wrap}>
                            <img src={`${miner}`} alt={'Miner'} />
                            <div className={styles.form}>
                                <h2>Заказать обратный звонок</h2>
                                <p>Оставьте свои контакты и мы вам перезвоним</p>
                                <div className={styles.formFields}>
                                    <Input placeholder={'Имя'} className={styles.input} />
                                    <Input placeholder={'Телефон'} className={styles.input} />
                                </div>
                                <Checkbox
                                    theme={'white'}
                                    labelSlot={
                                        <span className={styles.label}>
                                            Я согласен на обработку персональных данных
                                        </span>
                                    }
                                />
                                <div>
                                    <Button size={matches ? 'md' : 'lg'} isWide={matches}>
                                        Отправить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <OrderCallModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={'Заказать звонок'}
                subtitle={'Оставьте свои контакты и мы вам перезвоним'}
            />
        </>
    );
};

export default DataCenterPage;
