import { Footer, Header } from '@/widgets';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Layout.module.scss';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};
