import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import clsx from 'clsx';
import { SwiperButton } from '@/shared/ui';
import './CardSlider.scss';
import { BASE_URL } from '@/shared/consts';

interface ICardSliderProps {
    images: { image: string }[];
}

export const CardSlider: FC<ICardSliderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className={'card-slider'}>
            <Swiper
                effect={'cards'}
                cardsEffect={{ rotate: false, perSlideOffset: 50, slideShadows: false }}
                centeredSlides
                modules={[EffectCards]}
                breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
                <SwiperButton
                    variant={'prev'}
                    disabled={currentSlide === 0}
                    className={clsx('swiper-button', 'prev')}
                />
                {images.map(({ image }, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={clsx('image')}>
                                <img src={BASE_URL + image} alt={'Slide image'} />
                            </div>
                        </SwiperSlide>
                    );
                })}
                <SwiperButton
                    variant={'next'}
                    disabled={currentSlide === images.length - 1}
                    className={clsx('swiper-button', 'next')}
                />
            </Swiper>
        </div>
    );
};
