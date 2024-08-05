import clsx from 'clsx';
import styles from './AdvantagesDCMinig.module.scss';

export const AdvantagesDCMinig = () => {
    return (
        <section className={styles.advantages}>
            <div className={'container'}>
                <h2 className={clsx(styles.advantagesTitle, 'section-title-primary')}>
                    Преимущества <span>DC Mining</span>
                </h2>
                <div className={styles.wrap}>
                    <article className={styles.advantage}>
                        <div className={styles.placeholder}></div>
                        <p className={styles.title}>Предоплата от 30%</p>
                        <p className={styles.subtitle}>гибкие условия оплаты, которые подойдут именно Вам</p>
                    </article>
                    <article className={styles.advantage}>
                        <div className={styles.placeholder}></div>
                        <p className={styles.title}>Работа по договору</p>
                        <p className={styles.subtitle}>
                            заключаем договор, где прописаны сроки и наша ответственность перед Вами
                        </p>
                    </article>
                    <article className={styles.advantage}>
                        <div className={styles.placeholder}></div>
                        <p className={styles.title}>Удобные способы оплаты</p>
                        <p className={styles.subtitle}>
                            от приёма наличных в Вашем городе до оплаты по безналу от юр. лица (в т.ч. с НДС)
                        </p>
                    </article>
                    <article className={styles.advantage}>
                        <div className={styles.placeholder}></div>
                        <p className={styles.title}>Работа под ключ</p>
                        <p className={styles.subtitle}>в комплекс услуг входит проверка, упаковка, доставка</p>
                    </article>
                </div>
            </div>
        </section>
    );
};
