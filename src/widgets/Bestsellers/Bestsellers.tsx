import { Link } from 'react-router-dom';
import { Badge, Button, IconButton } from '@/shared/ui';
import HeartIcon from '@/shared/assets/icons/heart.svg?react';
import StatisticIcon from '@/shared/assets/icons/statistic.svg?react';
import img from './img.png';
import styles from './Bestsellers.module.scss';

export const Bestsellers = () => {
    return (
        <section className={styles.bestsellers}>
            <div className={'container'}>
                <h2 className={'section-title'}>Бестселлеры</h2>
                <div className={styles.bestsellersList}>
                    <Link to={''}>
                        <article className={styles.bestsellersItem}>
                            <div className={styles.image}>
                                <img src={`${img}`} alt={'bestseller'} />
                            </div>
                            <div className={styles.tags}>
                                <Badge text={'В наличии'} theme={'green'} />
                                <Badge text={'Скидка — 15% '} theme={'red'} />
                                <Badge text={'Новинка'} theme={'blue'} />
                            </div>
                            <p className={styles.price}>545 000 ₽</p>
                            <p className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</p>
                            <div className={styles.specifications}>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                            </div>
                            <div className={styles.buttons}>
                                <Button size={'sm'} className={styles.button}>
                                    Заказать
                                </Button>
                                <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                                <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
                            </div>
                        </article>
                    </Link>
                    <Link to={''}>
                        <article className={styles.bestsellersItem}>
                            <div className={styles.image}>
                                <img src={`${img}`} alt={'bestseller'} />
                            </div>
                            <div className={styles.tags}>
                                <Badge text={'В наличии'} theme={'green'} />
                                <Badge text={'Скидка — 15% '} theme={'red'} />
                                <Badge text={'Новинка'} theme={'blue'} />
                            </div>
                            <p className={styles.price}>545 000 ₽</p>
                            <p className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</p>
                            <div className={styles.specifications}>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                            </div>
                            <div className={styles.buttons}>
                                <Button size={'sm'} className={styles.button}>
                                    Заказать
                                </Button>
                                <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                                <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
                            </div>
                        </article>
                    </Link>
                    <Link to={''}>
                        <article className={styles.bestsellersItem}>
                            <div className={styles.image}>
                                <img src={`${img}`} alt={'bestseller'} />
                            </div>
                            <div className={styles.tags}>
                                <Badge text={'В наличии'} theme={'green'} />
                                <Badge text={'Скидка — 15% '} theme={'red'} />
                                <Badge text={'Новинка'} theme={'blue'} />
                            </div>
                            <p className={styles.price}>545 000 ₽</p>
                            <p className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</p>
                            <div className={styles.specifications}>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                            </div>
                            <div className={styles.buttons}>
                                <Button size={'sm'} className={styles.button}>
                                    Заказать
                                </Button>
                                <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                                <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
                            </div>
                        </article>
                    </Link>
                    <Link to={''}>
                        <article className={styles.bestsellersItem}>
                            <div className={styles.image}>
                                <img src={`${img}`} alt={'bestseller'} />
                            </div>
                            <div className={styles.tags}>
                                <Badge text={'В наличии'} theme={'green'} />
                                <Badge text={'Скидка — 15% '} theme={'red'} />
                                <Badge text={'Новинка'} theme={'blue'} />
                            </div>
                            <p className={styles.price}>545 000 ₽</p>
                            <p className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</p>
                            <div className={styles.specifications}>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                            </div>
                            <div className={styles.buttons}>
                                <Button size={'sm'} className={styles.button}>
                                    Заказать
                                </Button>
                                <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                                <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
                            </div>
                        </article>
                    </Link>
                    <Link to={''}>
                        <article className={styles.bestsellersItem}>
                            <div className={styles.image}>
                                <img src={`${img}`} alt={'bestseller'} />
                            </div>
                            <div className={styles.tags}>
                                <Badge text={'В наличии'} theme={'green'} />
                                <Badge text={'Скидка — 15% '} theme={'red'} />
                                <Badge text={'Новинка'} theme={'blue'} />
                            </div>
                            <p className={styles.price}>545 000 ₽</p>
                            <p className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</p>
                            <div className={styles.specifications}>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                                <div>Хэшрейт — 9500 MH/s</div>
                            </div>
                            <div className={styles.buttons}>
                                <Button size={'sm'} className={styles.button}>
                                    Заказать
                                </Button>
                                <IconButton icon={<HeartIcon />} className={styles.iconButton} />
                                <IconButton icon={<StatisticIcon />} className={styles.iconButton} />
                            </div>
                        </article>
                    </Link>
                </div>
            </div>
        </section>
    );
};
