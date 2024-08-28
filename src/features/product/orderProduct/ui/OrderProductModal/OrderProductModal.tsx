import { FC, useEffect, useState } from 'react';
import { Modal, StateModal } from '@/shared/ui';
import { OrderProductForm } from '../OrderProductForm';
import { IProduct } from '@/entities/product';

interface IOrderProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: IProduct;
}

export const OrderProductModal: FC<IOrderProductModalProps> = ({ isOpen, onClose, product }) => {
    const [isFinally, setIsFinally] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsFinally(false);
        setIsError(false);
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={isFinally ? undefined : 'Заказать продукт'}
            subtitle={isFinally ? undefined : 'Оставьте контактные данные и укажите количество устройств'}
        >
            {isFinally ? (
                <StateModal onClose={onClose} isError={isError} />
            ) : (
                <OrderProductForm
                    onClose={onClose}
                    product={product}
                    setIsFinally={(value) => setIsFinally(value)}
                    setIsError={(value) => setIsError(value)}
                />
            )}
        </Modal>
    );
};
