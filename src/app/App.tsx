import React from 'react';
import { Badge, Button, Input } from '@/shared/ui';

export const App = () => {
    return (
        <div>
            <Button onClick={() => console.log('click')} size={'lg'}>
                Подробнее
            </Button>
            <Button size={'md'}>Подробнее</Button>
            <Button size={'sm'}>Подробнее</Button>
            <br />
            <br />
            <Button size={'lg'} variant={'outline'}>
                Подробнее
            </Button>
            <Button size={'md'} variant={'outline'}>
                Подробнее
            </Button>
            <Button size={'sm'} variant={'outline'}>
                Подробнее
            </Button>
            <br />
            <br />
            <Input placeholder={'Имя'} />
            <br />
            <br />
            <Badge text={'В наличии'} theme={'green'} />
            <Badge text={'Скидка - 15%'} theme={'red'} />
            <Badge text={'Новинка'} theme={'blue'} />
        </div>
    );
};
