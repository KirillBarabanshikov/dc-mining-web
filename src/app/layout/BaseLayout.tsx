import { Layout } from '@/shared/ui';
import { Footer, Header } from '@/widgets';
import { useLocation } from 'react-router-dom';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

const pagesWithoutFooter = ['/service'];

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
    const { pathname } = useLocation();

    const footerSlot = pagesWithoutFooter.includes(pathname) ? undefined : <Footer />;

    return (
        <LocationProvider>
            <Layout headerSlot={<Header />} footerSlot={footerSlot}>
                {children}
            </Layout>
        </LocationProvider>
    );
};

const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'pageview',
            page: location.pathname,
        });
        if (prevPath.current !== location.pathname) {
            prevPath.current = location.pathname;
            window.location.href = location.pathname;
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{children}</>;
};
