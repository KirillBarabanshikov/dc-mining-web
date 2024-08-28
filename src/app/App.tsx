import { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from './store';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/shared/styles/index.css';

export const App: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistedStore}>{children}</PersistGate>
        </ReduxProvider>
    );
};
