import { useGetSliderQuery } from '@/entities/mainSlider/api';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_XL } from '@/shared/consts';
import styles from './MainSlider.module.scss';

export const MainSlider = () => {
    const { data: slides } = useGetSliderQuery();
    const matches = useMediaQuery(MAX_WIDTH_XL);

    return (
        <Swiper
            effect={'fade'}
            modules={[EffectFade, Autoplay, Pagination]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={!!slides && slides.length > 1}
        >
            {slides &&
                slides.map((slide) => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <section className={styles.slide}>
                                <div className={styles.slideContent}>
                                    <h2>{slide.title}</h2>
                                    <div
                                        className={styles.description}
                                        dangerouslySetInnerHTML={{ __html: slide.description }}
                                    />
                                    <Button className={styles.button} size={matches ? 'md' : 'lg'}>
                                        Подробнее
                                    </Button>
                                </div>
                                <div className={styles.imageWrap}>
                                    <img src={`${slide.media}`} alt={slide.title} />
                                </div>
                            </section>
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};
