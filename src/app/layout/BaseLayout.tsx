import { Layout } from '@/shared/ui';
import { Footer, Header } from '@/widgets';
import { useLocation } from 'react-router-dom';
import { FC, PropsWithChildren, useEffect } from 'react';

const pagesWithoutFooter = ['/service'];

export const BaseLayout = () => {
    const { pathname } = useLocation();

    const footerSlot = pagesWithoutFooter.includes(pathname) ? undefined : <Footer />;

    return (
        <ScrollToTop>
            <Layout headerSlot={<Header />} footerSlot={footerSlot} />
        </ScrollToTop>
    );
};

const ScrollToTop: FC<PropsWithChildren> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};
