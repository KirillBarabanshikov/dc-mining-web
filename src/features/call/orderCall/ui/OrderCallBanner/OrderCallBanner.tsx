import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Input, Modal, StateModal } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { useOrderCallMutation } from '@/entities/call';
import { orderCallFormScheme, TOrderCallFormScheme } from '@/features/call/orderCall';
import miner from '@/shared/assets/images/data-center/miner.png';
import styles from './OrderCallBanner.module.scss';

export const OrderCallBanner = () => {
    const [orderCall, { isLoading, isError, isSuccess, reset: resetOrderCall }] = useOrderCallMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<TOrderCallFormScheme>({ resolver: yupResolver(orderCallFormScheme) });
    const matches = useMediaQuery(MAX_WIDTH_MD);

    const onSubmit = async (data: TOrderCallFormScheme) => {
        await orderCall({ ...data, title: 'Заказать обратный звонок' }).unwrap();
        reset();
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
                                    {...register('phone')}
                                />
                            </div>
                            <Checkbox
                                theme={'white'}
                                label={
                                    <>
                                        Я согласен на обработку{' '}
                                        <a href={'/'} target={'_blank'}>
                                            персональных данных
                                        </a>
                                    </>
                                }
                                error={!!errors.checked}
                                className={styles.checkbox}
                                {...register('checked')}
                            />
                            <div>
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
