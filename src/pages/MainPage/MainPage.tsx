import React from 'react';
import { Button } from '@/shared/ui';

export const MainPage = () => {
    return (
        <div>
            <section>
                <h1>Размещение вашего оборудования в дата центре</h1>
                <ul>
                    <li>Официальное размещение от 4,7 руб/кВт</li>
                    <li>Вооруженная охрана</li>
                    <li>Профессиональный сервис-центр</li>
                    <li>Более 1000 устройств в обслуживании</li>
                </ul>
                <Button>Подробнее</Button>
            </section>
        </div>
    );
};
