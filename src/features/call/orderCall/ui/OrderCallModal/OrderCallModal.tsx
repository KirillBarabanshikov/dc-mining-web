import { FC } from 'react';
import { Button, Checkbox, Input, Modal, StateModal } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderCallFormScheme, TOrderCallFormScheme } from '@/features/call/orderCall';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { useOrderCallMutation } from '@/entities/call';
import styles from './OrderCallModal.module.scss';

interface IOrderCallModalProps {
    title: string;
    subtitle: string;
    isOpen: boolean;
    onClose: () => void;
}

export const OrderCallModal: FC<IOrderCallModalProps> = ({ title, subtitle, isOpen, onClose }) => {
    const [orderCall, { isLoading, isError, isSuccess, reset: resetOrderCall }] = useOrderCallMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<TOrderCallFormScheme>({ resolver: yupResolver(orderCallFormScheme) });
    const matches = useMediaQuery(MAX_WIDTH_MD);

    const onSubmit = async (data: TOrderCallFormScheme) => {
        await orderCall({ ...data, title }).unwrap();
    };

    const handleClose = () => {
        reset();
        resetOrderCall();
        onClose();
    };

    const isFinally = isSuccess || isError;

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={isFinally ? undefined : title}
            subtitle={isFinally ? undefined : subtitle}
        >
            {isFinally ? (
                <StateModal onClose={handleClose} isError={isError} />
            ) : (
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder={'Имя'} error={!!errors.name} className={styles.input} {...register('name')} />
                    <Input
                        placeholder={'Телефон'}
                        error={!!errors.phone}
                        className={styles.input}
                        {...register('phone')}
                    />
                    <Checkbox
                        className={styles.checkbox}
                        label={
                            <>
                                Я согласен на обработку{' '}
                                <a href={'/'} target={'_blank'}>
                                    персональных данных
                                </a>
                            </>
                        }
                        error={!!errors.checked}
                        {...register('checked')}
                    />
                    <div className={styles.buttons}>
                        <Button variant={'outline'} onClick={handleClose} size={matches ? 'md' : 'lg'} isWide={matches}>
                            Отмена
                        </Button>
                        <Button type={'submit'} size={matches ? 'md' : 'lg'} isWide={matches} disabled={isLoading}>
                            Отправить
                        </Button>
                    </div>
                </form>
            )}
        </Modal>
    );
};