import { FC, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Captcha, Checkbox, Input, NumberInput } from '@/shared/ui';
import { formatter, useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { IProduct, useOrderProductMutation } from '@/entities/product';
import { useGetPersonalDataQuery } from '@/entities/personalData';
import { orderProductFormScheme, TOrderProductFormScheme } from '../../model';
import styles from './OrderProductForm.module.scss';

interface IOrderProductFormProps {
    onClose: () => void;
    product: IProduct;
    setIsFinally: (value: boolean) => void;
    setIsError: (value: boolean) => void;
}

export const OrderProductForm: FC<IOrderProductFormProps> = ({ onClose, product, setIsFinally, setIsError }) => {
    const { data: personalData } = useGetPersonalDataQuery();
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
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const onChangeProductCount = (value: number) => {
        product.price && setPrice(product.price * value);
        setCount(value);
    };

    const onSubmit = async (data: TOrderProductFormScheme) => {
        if (!captchaVerified) return;

        try {
            await orderProduct({ ...data, productId: product.id, price: price ?? 0, count }).unwrap();
        } catch (error) {
            setIsError(true);
        } finally {
            setIsFinally(true);
        }
    };

    const handleClose = () => {
        reset();
        resetOrderProduct();
        setCaptchaVerified(false);
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
                    <Input disabled value={price ? formatter.format(price) : 'Цена по запросу'} />
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
                            <a href={personalData?.image} target={'_blank'}>
                                персональных данных
                            </a>
                        </>
                    }
                    {...register('checked')}
                    error={!!errors.checked}
                />
                <Captcha
                    ref={recaptchaRef}
                    onCaptchaVerify={(verify) => setCaptchaVerified(verify)}
                    onExpired={() => setCaptchaVerified(false)}
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
