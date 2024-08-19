import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import clsx from 'clsx';
import img from '@/shared/assets/images/main/banner1.png';
import { SwiperButton } from '@/shared/ui';
import './CardSlider.scss';

export const CardSlider = () => {
    return (
        <div className={'card-slider'}>
            <Swiper
                effect={'cards'}
                cardsEffect={{ rotate: false, perSlideOffset: 50, slideShadows: false }}
                centeredSlides
                slidesPerView={2}
                loop
                modules={[EffectCards]}
            >
                <SwiperButton variant={'prev'} className={clsx('swiper-button', 'prev')} />
                {Array.from({ length: 10 }).map((_, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={clsx('image')}>
                                <img src={img} alt={'alt'} />
                            </div>
                        </SwiperSlide>
                    );
                })}
                <SwiperButton variant={'next'} className={clsx('swiper-button', 'next')} />
            </Swiper>
        </div>
    );
};
