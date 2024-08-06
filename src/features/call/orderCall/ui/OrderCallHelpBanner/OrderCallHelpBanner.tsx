import { Button, Checkbox, Input, Modal, StateModal } from '@/shared/ui';
import { useOrderCallMutation } from '@/entities/call';
import { useForm } from 'react-hook-form';
import { orderCallFormScheme, TOrderCallFormScheme } from '@/features/call/orderCall';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './OrderCallHelpBanner.module.scss';

export const OrderCallHelpBanner = () => {
    const [orderCall, { isLoading, isError, isSuccess, reset: resetOrderCall }] = useOrderCallMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<TOrderCallFormScheme>({ resolver: yupResolver(orderCallFormScheme) });

    const onSubmit = async (data: TOrderCallFormScheme) => {
        await orderCall({ ...data, title: 'Помочь с выбором' }).unwrap();
        reset();
    };

    return (
        <div className={styles.banner}>
            <h3>Помочь с выбором?</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder={'Телефон'} theme={'dark'} error={!!errors.phone} {...register('phone')} />
                <Input placeholder={'Имя'} theme={'dark'} error={!!errors.name} {...register('name')} />
                <Checkbox
                    label={
                        <>
                            Я согласен на обработку{' '}
                            <a href={'/'} target={'_blank'}>
                                персональных данных
                            </a>
                        </>
                    }
                    theme={'white'}
                    error={!!errors.checked}
                    className={styles.checkbox}
                    {...register('checked')}
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
