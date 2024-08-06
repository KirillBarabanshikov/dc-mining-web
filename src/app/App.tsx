import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { router } from './router';
import { persistedStore, store } from './store';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const App = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistedStore}>
                <RouterProvider router={router} />
            </PersistGate>
        </ReduxProvider>
    );
};
