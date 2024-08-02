import clsx from 'clsx';
import { useMediaQuery } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { MAX_WIDTH_LG } from '@/shared/consts';
import manager from '@/shared/assets/images/managers/manager.png';
import calculator from '@/shared/assets/images/managers/calculator.png';
import styles from './Managers.module.scss';
import { OrderCallModal } from '@/features/call';
import { useState } from 'react';

export const Managers = () => {
    const [isOpen, setIsOpen] = useState(false);

    const matches = useMediaQuery(MAX_WIDTH_LG);

    return (
        <div className={clsx(styles.managers)}>
            <section className={styles.request}>
                <h3>Не знаете какое оборудование выбрать?</h3>
                <p>Направьте запрос нашим менеджерам </p>
                <Button size={!matches ? 'lg' : 'md'} onClick={() => setIsOpen(true)}>
                    Оставить запрос
                </Button>
                <img src={`${manager}`} alt={'Manager'} />
            </section>
            <section className={styles.calculator}>
                <h4>Либо воспользуйтесь калькулятором доходности</h4>
                <Button theme={'white'} size={!matches ? 'lg' : 'md'}>
                    Открыть калькулятор
                </Button>
                <img src={`${calculator}`} alt={'Calculator'} />
            </section>

            <OrderCallModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={'Выбор оборудования'}
                subtitle={'Оставьте контактные данные и наши менеджеры помогут вам с выбором'}
            />
        </div>
    );
};
