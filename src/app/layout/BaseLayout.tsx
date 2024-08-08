import { Layout } from '@/shared/ui';
import { Footer, Header } from '@/widgets';
import { useLocation } from 'react-router-dom';

const pagesWithoutFooter = ['/service'];

export const BaseLayout = () => {
    const { pathname } = useLocation();

    const footerSlot = pagesWithoutFooter.includes(pathname) ? undefined : <Footer />;

    return <Layout headerSlot={<Header />} footerSlot={footerSlot} />;
};
