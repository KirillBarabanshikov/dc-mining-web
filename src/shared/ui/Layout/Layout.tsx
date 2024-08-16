import { FC, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Placeholder } from '@/shared/ui';
import styles from './Layout.module.scss';

interface ILayoutProps {
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ headerSlot, footerSlot }) => {
    return (
        <div className={clsx(styles.layout, !footerSlot && styles.withoutFooter)}>
            {headerSlot}
            <main>
                <Suspense fallback={<Placeholder />}>
                    <Outlet />
                </Suspense>
            </main>
            {footerSlot}
            {/*<ScrollRestoration />*/}
        </div>
    );
};
