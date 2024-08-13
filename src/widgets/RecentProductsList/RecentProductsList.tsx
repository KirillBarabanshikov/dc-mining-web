import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { RecentProductCard } from '@/entities/product';
import { useAppSelector } from '@/shared/lib';
import { SwiperButton } from '@/shared/ui';
import styles from './RecentProductsList.module.scss';

export const RecentProductsList = () => {
    const { recent } = useAppSelector((state) => state.products);

    if (!recent.length) return <></>;

    return (
        <section className={styles.recent}>
            <div className={'container scrollable'}>
                <h2 className={'section-title-primary'}>Вы недавно смотрели</h2>
                <Swiper
                    slidesPerView={'auto'}
                    breakpoints={{ 0: { spaceBetween: 10 }, 769: { spaceBetween: 32 } }}
                    className={styles.list}
                >
                    {recent.length >= 4 && (
                        <SwiperButton variant={'prev'} className={clsx(styles.swiperButton, styles.prev)} />
                    )}
                    {recent.map((product) => {
                        return (
                            <SwiperSlide key={product.id} className={styles.slide}>
                                <RecentProductCard product={product} />
                            </SwiperSlide>
                        );
                    })}
                    {recent.length >= 4 && (
                        <SwiperButton variant={'next'} className={clsx(styles.swiperButton, styles.next)} />
                    )}
                </Swiper>
            </div>
        </section>
    );
};
