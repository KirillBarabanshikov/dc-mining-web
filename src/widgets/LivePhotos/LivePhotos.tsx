import { FC } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButton } from '@/shared/ui';
import img from '@/shared/assets/images/main/banner1.png';
import styles from './LivePhotos.module.scss';

interface ILivePhotosProps {
    className?: string;
}

export const LivePhotos: FC<ILivePhotosProps> = ({ className }) => {
    return (
        <div className={clsx(className, 'container')}>
            <Swiper slidesPerView={'auto'} spaceBetween={16}>
                <SwiperButton variant={'prev'} className={clsx(styles.swiperButton, styles.prev)} />
                {Array.from({ length: 10 }).map((_, index) => {
                    return (
                        <SwiperSlide key={index} className={styles.slide}>
                            <div className={styles.photo}>
                                <img src={img} alt={'alt'} />
                            </div>
                        </SwiperSlide>
                    );
                })}
                <SwiperButton variant={'next'} className={clsx(styles.swiperButton, styles.next)} />
            </Swiper>
        </div>
    );
};
