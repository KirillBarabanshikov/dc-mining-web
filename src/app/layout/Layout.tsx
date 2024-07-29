import React from 'react';
import { Footer, Header } from '@/widgets';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
