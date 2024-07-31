import animationPC from '@/shared/assets/animations/logo-animation-pc.webm';
import animationMobile from '@/shared/assets/animations/logo-animation-mobile.webm';
import styles from './LogoAnimationBanner.module.scss';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
export const LogoAnimationBanner = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <>
            <div className={styles.bannerWrapper}>
                <video autoPlay loop muted>
                    <source src={`${matches ? animationMobile : animationPC}`} />
                </video>
            </div>
            <div className={styles.cover}></div>
        </>
    );
};
