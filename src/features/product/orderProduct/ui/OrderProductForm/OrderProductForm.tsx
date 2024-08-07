import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Input, NumberInput } from '@/shared/ui';
import { orderProductFormScheme, TOrderProductFormScheme } from '../../model';
import { formatter, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { IProduct, useOrderProductMutation } from '@/entities/product';
import styles from './OrderProductForm.module.scss';

interface IOrderProductFormProps {
    onClose: () => void;
    product: IProduct;
    setIsFinally: (value: boolean) => void;
    setIsError: (value: boolean) => void;
}

export const OrderProductForm: FC<IOrderProductFormProps> = ({ onClose, product, setIsFinally, setIsError }) => {
    const [price, setPrice] = useState(product.price);
    const [count, setCount] = useState(1);
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<TOrderProductFormScheme>({
        resolver: yupResolver(orderProductFormScheme),
    });
    const [orderProduct, { isLoading, reset: resetOrderProduct }] = useOrderProductMutation();

    const onChangeProductCount = (value: number) => {
        setPrice(product.price * value);
        setCount(value);
    };

    const onSubmit = async (data: TOrderProductFormScheme) => {
        try {
            await orderProduct({ ...data, productId: product.id, price, count }).unwrap();
        } catch (error) {
            setIsError(true);
        } finally {
            setIsFinally(true);
        }
    };

    const handleClose = () => {
        reset();
        resetOrderProduct();
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrap}>
                <Input placeholder={'Имя'} {...register('name')} error={!!errors.name} />
                <Input placeholder={'Телефон'} {...register('phone')} error={!!errors.phone} />
            </div>
            <Input disabled value={product.title} className={styles.inputProduct} />
            <div className={styles.wrap}>
                <div className={styles.item}>
                    <span className={styles.label}>Цена</span>
                    <Input disabled value={formatter.format(price)} />
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>Количество</span>
                    <NumberInput min={1} defaultValue={1} onChange={onChangeProductCount} />
                </div>
            </div>
            <div className={styles.buttonsWrap}>
                <Checkbox
                    label={
                        <>
                            Я согласен на обработку{' '}
                            <a href={'/'} target={'_blank'}>
                                персональных данных
                            </a>
                        </>
                    }
                    {...register('checked')}
                    error={!!errors.checked}
                />
                <div className={styles.wrap}>
                    <Button variant={'outline'} onClick={handleClose} size={matches ? 'md' : 'lg'} isWide>
                        Отмена
                    </Button>
                    <Button type={'submit'} size={matches ? 'md' : 'lg'} isWide disabled={isLoading}>
                        Отправить
                    </Button>
                </div>
            </div>
        </form>
    );
};
