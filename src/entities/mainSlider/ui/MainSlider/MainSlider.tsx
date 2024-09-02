import { useGetSliderQuery } from '@/entities/mainSlider/api';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_XL } from '@/shared/consts';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useGetCategoriesQuery } from '@/entities/category';
import styles from './MainSlider.module.scss';

export const MainSlider = () => {
    const { data: slides } = useGetSliderQuery();
    const matches = useMediaQuery(MAX_WIDTH_XL);
    const navigate = useNavigate();
    const { data: categories } = useGetCategoriesQuery();

    const handleNavigate = (link: string) => {
        if (!categories) return;

        let path = '/';

        if (link === 'dataCenters') {
            path = '/data-center';
        } else if (link === 'products') {
            const category = categories.find((category) => category.title === 'asicMiners');
            path = category ? `/catalog/${category.id}/${category.slug}` : '/';
        } else if (link === 'containers') {
            const category = categories.find((category) => category.title === 'containersMining');
            path = category ? `/catalog/${category.id}/${category.slug}` : '/';
        }

        navigate(path);
    };

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
                                    <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />
                                    <div
                                        className={clsx(styles.description, 'list')}
                                        dangerouslySetInnerHTML={{ __html: slide.description }}
                                    />
                                    <Button
                                        className={styles.button}
                                        size={matches ? 'md' : 'lg'}
                                        onClick={() => handleNavigate(slide.links)}
                                    >
                                        {slide.links === 'cloudMining' ? 'Скоро' : 'Подробнее'}
                                    </Button>
                                </div>
                                <div className={styles.imageWrap}>
                                    {slide.media.includes('.webm') || slide.media.includes('.mp4') ? (
                                        <video autoPlay loop muted playsInline>
                                            <source src={slide.media} />
                                        </video>
                                    ) : (
                                        <img src={`${slide.media}`} alt={slide.title} />
                                    )}
                                </div>
                            </section>
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};
