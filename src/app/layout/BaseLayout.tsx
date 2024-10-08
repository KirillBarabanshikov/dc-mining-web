import { Layout } from '@/shared/ui';
import { Footer, Header } from '@/widgets';
import { useLocation } from 'react-router-dom';
import { FC, PropsWithChildren, useEffect } from 'react';

const pagesWithoutFooter = ['/service'];

export const BaseLayout = () => {
    const { pathname } = useLocation();

    const footerSlot = pagesWithoutFooter.includes(pathname) ? undefined : <Footer />;

    return (
        <LocationProvider>
            <Layout headerSlot={<Header />} footerSlot={footerSlot} />
        </LocationProvider>
    );
};

const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'pageview',
            page: location.pathname,
        });
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{children}</>;
};
