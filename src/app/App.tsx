import { FC, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ISeo } from '@/entities/seo';
import { getMangoNumber } from '@/shared/lib';
import { store } from './store/store.ts';
import { AppRoutes } from './routes/AppRoutes.tsx';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/shared/styles/index.css';

// import { TagManager } from '@/app/layout/BaseLayout.tsx';

interface IAppProps {
    seoData: ISeo[];
}

export const App: FC<IAppProps> = ({ seoData }) => {
    useEffect(() => {
        getMangoNumber();
    }, []);

    return (
        <ReduxProvider store={store}>
            {/*<TagManager />*/}
            <AppRoutes seoData={seoData} />
        </ReduxProvider>
    );
};
