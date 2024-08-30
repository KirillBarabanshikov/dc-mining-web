import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ISeo } from '@/entities/seo';
import { store } from './store/store.ts';
import { AppRoutes } from './routes/AppRoutes.tsx';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/shared/styles/index.css';

interface IAppProps {
    seoData: ISeo[];
}

export const App: FC<IAppProps> = ({ seoData }) => {
    return (
        <ReduxProvider store={store}>
            <AppRoutes seoData={seoData} />
        </ReduxProvider>
    );
};
