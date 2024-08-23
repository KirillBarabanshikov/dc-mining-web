import animationPC from '@/shared/assets/animations/logo-animation-pc.webm';
import animationMobile from '@/shared/assets/animations/logo-animation-mobile.webm';
import styles from './LogoAnimationBanner.module.scss';

export const LogoAnimationBanner = () => {
    return (
        <>
            <div className={styles.bannerWrapper}>
                <video autoPlay loop muted playsInline>
                    <source src={animationPC} media={'(min-width: 769px)'} />
                    <source src={animationMobile} media='(max-width: 768px)' />
                    Ваш браузер не поддерживает тег video.
                </video>
            </div>
            <div className={styles.cover}></div>
        </>
    );
};
