import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Input, NumberInput } from '@/shared/ui';
import { orderProductFormScheme, TOrderProductFormScheme } from '../../model';
import styles from './OrderProductForm.module.scss';
import { FC } from 'react';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';

interface IOrderProductFormProps {
    onClose: () => void;
}

export const OrderProductForm: FC<IOrderProductFormProps> = ({ onClose }) => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TOrderProductFormScheme>({
        resolver: yupResolver(orderProductFormScheme),
    });

    const onSubmit = (data: TOrderProductFormScheme) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrap}>
                <Input placeholder={'Имя'} {...register('name')} error={!!errors.name} />
                <Input placeholder={'Телефон'} {...register('phone')} error={!!errors.phone} />
            </div>
            <Input disabled value={'Asic майнер Bitmain Antminer S19K PRO 115 TH/s'} className={styles.inputProduct} />
            <div className={styles.wrap}>
                <div className={styles.item}>
                    <span className={styles.label}>Цена</span>
                    <Input disabled value={'130 200 ₽'} />
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Колличество</span>
                    <NumberInput min={1} defaultValue={1} />
                </div>
            </div>
            <div className={styles.buttonsWrap}>
                <Checkbox label={'Я согласен на обработку персональных данных'} />
                <div className={styles.wrap}>
                    <Button variant={'outline'} onClick={onClose} size={matches ? 'md' : 'lg'} isWide>
                        Отмена
                    </Button>
                    <Button type={'submit'} size={matches ? 'md' : 'lg'} isWide>
                        Отправить
                    </Button>
                </div>
            </div>
        </form>
    );
};
