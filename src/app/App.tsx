import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store.ts';
import { routes } from './routes/routes.tsx';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/shared/styles/index.css';

export const App = () => {
    return <ReduxProvider store={store}>{routes}</ReduxProvider>;
};
