import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD, PHONE_MASK } from '@/shared/consts';
import { useSendRequestMutation } from '@/entities/service';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Radio, File, Modal, StateModal, Captcha } from '@/shared/ui';
import { sendRequestFormScheme, TSendRequestFormScheme } from '../model';
import styles from './SendRequestForm.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

export const SendRequestForm = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const [resetFile, setResetFile] = useState(false);
    const [sendRequest, { isLoading, isError, isSuccess, reset: resetSendRequest }] = useSendRequestMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        setValue,
        trigger,
    } = useForm<TSendRequestFormScheme>({
        resolver: yupResolver(sendRequestFormScheme),
    });
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const onSubmit = async (data: TSendRequestFormScheme) => {
        if (!captchaVerified) return;
        await sendRequest({ ...data, buy: !!data.buy, mediaFile: data.mediaFile?.[0] }).unwrap();
        reset();
        setResetFile(true);
        setCaptchaVerified(false);

        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };

    const handleClose = () => {
        resetSendRequest();
        setResetFile(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.data}>
                    <p className={styles.label}>Данные для связи</p>
                    <div className={styles.inputs}>
                        <Input
                            placeholder={'Имя'}
                            {...register('name')}
                            error={!!errors.name}
                            className={styles.input}
                        />
                        <Input
                            mask={PHONE_MASK}
                            placeholder={'Телефон'}
                            error={!!errors.phone}
                            className={styles.input}
                            {...register('phone', {
                                onChange: (e) => {
                                    setValue('phone', e.target.value);
                                    !!errors.phone && trigger('phone');
                                },
                            })}
                        />
                        <Input
                            placeholder={'E-mail'}
                            {...register('email')}
                            error={!!errors.email}
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.problem}>
                    <p className={styles.label}>О проблеме</p>
                    <div className={styles.radioGroup}>
                        <p>Оборудование приобреталось у нас?</p>
                        <div className={styles.wrap}>
                            <Radio label={'Да'} {...register('buy')} value={1} defaultChecked={true} />
                            <Radio label={'Нет'} {...register('buy')} value={0} />
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <Input
                            placeholder={'Наименование оборудования (Производитель/Модель)'}
                            {...register('title')}
                            error={!!errors.title}
                            className={styles.input}
                        />
                        <Input
                            placeholder={'Адрес нахождения оборудования'}
                            {...register('address')}
                            error={!!errors.address}
                            className={styles.input}
                        />
                    </div>
                    <div className={clsx(styles.textarea, !!errors.description && styles.error)}>
                        <textarea placeholder={'Описание характера проблемы'} rows={2} {...register('description')} />
                        <File className={styles.file} reset={resetFile} {...register('mediaFile')} />
                    </div>
                    <span className={clsx(styles.formats, !!errors.mediaFile && styles.error)}>
                        Допустимые форматы файла: *.doc, *.docx, *.xls, *xlsx, *.pdf, *.png, *.jpg. Максимальный размер
                        файла: 10МБ!
                    </span>
                </div>
                <div className={styles.buttons}>
                    <Captcha
                        ref={recaptchaRef}
                        onCaptchaVerify={(verify) => setCaptchaVerified(verify)}
                        onExpired={() => setCaptchaVerified(false)}
                    />
                    <Button type={'submit'} size={matches ? 'md' : 'lg'} isWide={matches} disabled={isLoading}>
                        Отправить запрос
                    </Button>
                </div>
            </form>
            <Modal isOpen={isError || isSuccess} onClose={handleClose}>
                <StateModal onClose={handleClose} isError={isError} />
            </Modal>
        </>
    );
};
