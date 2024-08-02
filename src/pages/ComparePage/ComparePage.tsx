import { useState } from 'react';
import { Button, IconButton, Switch } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import HeartIcon from '@/shared/assets/icons/heart2.svg?react';
import img from '@/widgets/Offers/assets/img1.png';
import styles from './ComparePage.module.scss';
import { RecentProductsList } from '@/widgets';

const ComparePage = () => {
    const [isOn, setIsOn] = useState(false);
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div className={'sections'}>
            <section className={styles.compare}>
                <div className={'container'}>
                    <div className={styles.head}>
                        <h1 className={'section-title-secondary'}>Сравнение</h1>
                        <Button variant={'outline'} size={matches ? 'sm' : 'md'}>
                            Очистить
                        </Button>
                    </div>
                    <div className={styles.wrap}>
                        <span>Только отличия</span>
                        <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />
                    </div>
                    <div className={styles.list}>
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <img src={`${img}`} alt='name' />
                                <p className={styles.name}>Asic майнер Bitmain Antminer S19K PRO 115 TH/s</p>
                                <p className={styles.price}>130 200 ₽</p>
                                <div className={styles.buttons}>
                                    <IconButton className={styles.iconButton} icon={<HeartIcon />} />
                                    <Button variant={matches ? 'solid' : 'outline'} size={matches ? 'sm' : 'md'} isWide>
                                        Заказать
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.specifications}>
                                {Array.from({ length: 12 }).map((_, index) => {
                                    return (
                                        <div key={index} className={styles.specification}>
                                            <div className={styles.title}>Алгоритм</div>
                                            <div className={styles.value}>SHA-256</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <img src={`${img}`} alt='name' />
                                <p className={styles.name}>Asic майнер Bitmain Antminer S19K PRO 115 TH/s</p>
                                <p className={styles.price}>130 200 ₽</p>
                                <div className={styles.buttons}>
                                    <IconButton className={styles.iconButton} icon={<HeartIcon />} />
                                    <Button variant={matches ? 'solid' : 'outline'} size={matches ? 'sm' : 'md'} isWide>
                                        Заказать
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.specifications}>
                                {Array.from({ length: 12 }).map((_, index) => {
                                    return (
                                        <div key={index} className={styles.specification}>
                                            <div className={styles.title}>Алгоритм</div>
                                            <div className={styles.value}>SHA-256</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RecentProductsList />
        </div>
    );
};

export default ComparePage;
