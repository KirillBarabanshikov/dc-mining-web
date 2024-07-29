import React from 'react';
import { MainBanner } from '@/widgets';
import { Advantages } from '@/widgets/Advantages';

export const MainPage = () => {
    return (
        <div>
            <MainBanner />
            <Advantages as={'main'} />
        </div>
    );
};
