import { Swiper, SwiperSlide } from 'swiper/react';
import { RecentProductCard } from '@/entities/product/ui/RecentProductCard/RecentProductCard.tsx';
import styles from './RecentProductsList.module.scss';

export const RecentProductsList = () => {
    return (
        <section className={styles.recent}>
            <div className={'container'}>
                <h2 className={'section-title-primary'}>Вы недавно смотрели</h2>
                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1.1, spaceBetween: 10 },
                        500: { slidesPerView: 1.4, spaceBetween: 10 },
                        700: { slidesPerView: 2, spaceBetween: 32 },
                        992: { slidesPerView: 3.3, spaceBetween: 32 },
                    }}
                >
                    {Array.from({ length: 5 }).map((_, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <RecentProductCard />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};
