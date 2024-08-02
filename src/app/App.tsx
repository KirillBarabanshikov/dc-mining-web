import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const App = () => {
    return <RouterProvider router={router} />;
};
