import { Modal } from '@/shared/ui';
import { OrderProductForm } from '../OrderProductForm';
import { FC } from 'react';

interface IOrderProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const OrderProductModal: FC<IOrderProductModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={'Заказать продукт'}
            subtitle={'Оставьте контактные данные и укажите количество устройств'}
        >
            <OrderProductForm onClose={onClose} />
        </Modal>
    );
};
