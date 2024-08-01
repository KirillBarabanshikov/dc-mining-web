import { Button, File, Input, Radio } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './ServicePage.module.scss';

const ServicePage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <div className={styles.service}>
            <div className={'container-wide'}>
                <section className={styles.body}>
                    <h1 className={'section-title'}>Ремонт и сервис</h1>
                    <p className={styles.subtitle}>Опишите характер проблемы и наши специалисты помогут вам</p>
                    <form>
                        <div className={styles.data}>
                            <p className={styles.label}>Данные для связи</p>
                            <div className={styles.inputs}>
                                <Input placeholder={'Имя'} className={styles.input} />
                                <Input placeholder={'Телефон'} className={styles.input} />
                                <Input placeholder={'E-mail'} className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.problem}>
                            <p className={styles.label}>О проблеме</p>
                            <div className={styles.radioGroup}>
                                <p>Оборудование приобреталось у нас?</p>
                                <div className={styles.wrap}>
                                    <Radio label={'Да'} name={'radio'} />
                                    <Radio label={'Нет'} name={'radio'} />
                                </div>
                            </div>
                            <div className={styles.inputs}>
                                <Input
                                    placeholder={'Наименование оборудования (Производитель/Модель)'}
                                    className={styles.input}
                                />
                                <Input placeholder={'Адрес нахождения оборудования'} className={styles.input} />
                            </div>
                            <div className={styles.textarea}>
                                <textarea placeholder={'Описание характера проблемы'} rows={2} />
                                <File className={styles.file} />
                            </div>
                            <span className={styles.formats}>
                                Допустимые форматы файла: *.doc, *.docx, *.xls, *xlsx, *.pdf, *.png, *.jpg. Максимальный
                                размер файла: 10МБ!
                            </span>
                        </div>
                        <Button size={matches ? 'md' : 'lg'} isWide={matches}>
                            Отправить запрос
                        </Button>
                    </form>
                </section>
                <div className={styles.background}></div>
            </div>
        </div>
    );
};

export default ServicePage;
