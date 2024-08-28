import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { Button, Captcha, Checkbox, Input, Modal, StateModal } from '@/shared/ui';
import { useOrderCallMutation } from '@/entities/call';
import { useGetPersonalDataQuery } from '@/entities/personalData';
import { orderCallFormScheme, TOrderCallFormScheme } from '@/features/call/orderCall';
import { PHONE_MASK } from '@/shared/consts';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './OrderCallHelpBanner.module.scss';

export const OrderCallHelpBanner = () => {
    const { data: personalData } = useGetPersonalDataQuery();
    const [orderCall, { isLoading, isError, isSuccess, reset: resetOrderCall }] = useOrderCallMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        setValue,
        trigger,
    } = useForm<TOrderCallFormScheme>({ resolver: yupResolver(orderCallFormScheme) });
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const onSubmit = async (data: TOrderCallFormScheme) => {
        if (!captchaVerified) return;
        await orderCall({ ...data, title: 'Помочь с выбором' }).unwrap();
        reset();
        setCaptchaVerified(false);

        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    };

    return (
        <div className={styles.banner}>
            <h3>Помочь с выбором?</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    mask={PHONE_MASK}
                    placeholder={'Телефон'}
                    theme={'dark'}
                    error={!!errors.phone}
                    className={styles.input}
                    {...register('phone', {
                        onChange: (e) => {
                            setValue('phone', e.target.value);
                            !!errors.phone && trigger('phone');
                        },
                    })}
                />
                <Input placeholder={'Имя'} theme={'dark'} error={!!errors.name} {...register('name')} />
                <Checkbox
                    label={
                        <>
                            Я согласен на обработку{' '}
                            <a href={personalData?.image} target={'_blank'}>
                                персональных данных
                            </a>
                        </>
                    }
                    theme={'white'}
                    error={!!errors.checked}
                    className={styles.checkbox}
                    {...register('checked')}
                />
                <Captcha
                    ref={recaptchaRef}
                    onCaptchaVerify={(verify) => setCaptchaVerified(verify)}
                    onExpired={() => setCaptchaVerified(false)}
                    className={styles.captcha}
                />
                <Button type={'submit'} size={'md'} disabled={isLoading}>
                    Отправить
                </Button>
            </form>
            <Modal isOpen={isSuccess || isError} onClose={resetOrderCall}>
                <StateModal onClose={resetOrderCall} isError={isError} />
            </Modal>
        </div>
    );
};
