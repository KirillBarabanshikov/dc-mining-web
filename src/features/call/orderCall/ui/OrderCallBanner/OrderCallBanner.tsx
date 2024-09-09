import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Captcha, Checkbox, Input, Modal, StateModal } from '@/shared/ui';
import { useMediaQuery, useMetrikaGoal } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { useOrderCallMutation } from '@/entities/call';
import { orderCallFormScheme, TOrderCallFormScheme } from '@/features/call/orderCall';
import { useGetPersonalDataQuery } from '@/entities/personalData';
import { maskPhone } from '@/shared/lib/phone';
import miner from '@/shared/assets/images/data-center/miner.png';
import styles from './OrderCallBanner.module.scss';

export const OrderCallBanner = () => {
    const { data: personalData } = useGetPersonalDataQuery();
    const [orderCall, { isLoading, isError, isSuccess, reset: resetOrderCall }] = useOrderCallMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        setValue,
    } = useForm<TOrderCallFormScheme>({ resolver: yupResolver(orderCallFormScheme) });
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const { sendMetrikaGoal } = useMetrikaGoal();

    const onSubmit = async (data: TOrderCallFormScheme) => {
        if (!captchaVerified) return;

        await orderCall({ ...data, title: 'Заказать обратный звонок' }).unwrap();
        sendMetrikaGoal();
        reset();
        setCaptchaVerified(false);

        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };

    return (
        <>
            <section className={styles.banner}>
                <div className={'container'}>
                    <div className={styles.wrap}>
                        <img src={miner} alt={'Miner'} />
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <h2>Заказать обратный звонок</h2>
                            <p>Оставьте свои контакты и мы вам перезвоним</p>
                            <div className={styles.formFields}>
                                <Input
                                    placeholder={'Имя'}
                                    error={!!errors.name}
                                    className={styles.input}
                                    {...register('name')}
                                />
                                <Input
                                    placeholder={'Телефон'}
                                    error={!!errors.phone}
                                    className={styles.input}
                                    defaultValue={'+7'}
                                    {...register('phone', {
                                        onChange: (e) => {
                                            setValue('phone', maskPhone(e.target.value));
                                        },
                                    })}
                                />
                            </div>
                            <Checkbox
                                theme={'white'}
                                label={
                                    <>
                                        Я согласен на обработку{' '}
                                        <a href={personalData?.image} target={'_blank'}>
                                            персональных данных
                                        </a>
                                    </>
                                }
                                error={!!errors.checked}
                                className={styles.checkbox}
                                {...register('checked')}
                            />
                            <div className={styles.buttons}>
                                <Captcha
                                    ref={recaptchaRef}
                                    onCaptchaVerify={(verify) => setCaptchaVerified(verify)}
                                    onExpired={() => setCaptchaVerified(false)}
                                />
                                <Button
                                    type={'submit'}
                                    size={matches ? 'md' : 'lg'}
                                    isWide={matches}
                                    disabled={isLoading}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Modal isOpen={isSuccess || isError} onClose={resetOrderCall}>
                <StateModal onClose={resetOrderCall} isError={isError} />
            </Modal>
        </>
    );
};
