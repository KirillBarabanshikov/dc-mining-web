import { Link } from 'react-router-dom';
import { EMAIL, TELEPHONE, TELEPHONE_HREF } from '@/shared/consts';
import img from '@/shared/assets/images/call/call-me.png';
import styles from './CallMeBanner.module.scss';

export const CallMeBanner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h3>Проблемы с выбором оборудования?</h3>
                <p>Свяжитесь с нами, мы поможем подобрать оптимальное решение</p>
                <div className={styles.links}>
                    <Link to={TELEPHONE_HREF}>{TELEPHONE}</Link>
                    <Link to={`mailto:${EMAIL}`}>{EMAIL}</Link>
                </div>
            </div>
            <img src={`${img}`} alt={'Call'} />
        </section>
    );
};
