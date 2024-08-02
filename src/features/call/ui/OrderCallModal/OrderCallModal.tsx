import { FC } from 'react';
import { Button, Checkbox, Input, Modal } from '@/shared/ui';
import styles from './OrderCallModal.module.scss';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';

interface IOrderCallModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle: string;
}

export const OrderCallModal: FC<IOrderCallModalProps> = ({ isOpen, onClose, title, subtitle }) => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.content}>
                <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <form>
                    <div>
                        <Input placeholder={'Имя'} className={styles.inputName} />
                        <Input placeholder={'Телефон'} />
                    </div>
                    <Checkbox
                        labelSlot={<span className={styles.label}>Я согласен на обработку персональных данных</span>}
                    />
                    <div className={styles.buttons}>
                        <Button variant={'outline'} size={matches ? 'md' : 'lg'} isWide={matches} onClick={onClose}>
                            Отмена
                        </Button>
                        <Button size={matches ? 'md' : 'lg'} isWide={matches}>
                            Отправить
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
