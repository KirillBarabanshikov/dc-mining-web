import { lazy, Suspense } from 'react';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));

export const App = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <MainPage></MainPage>
        </Suspense>
    );
};
