import React from 'react';
import { Bestsellers, MainBanner, Offers } from '@/widgets';
import { Advantages } from '@/widgets/Advantages';

export const MainPage = () => {
    return (
        <div>
            <MainBanner />
            <Advantages as={'main'} />
            <Offers />
            <Bestsellers />
        </div>
    );
};
