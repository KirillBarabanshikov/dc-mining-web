import { Layout } from '@/shared/ui';
import { Header } from '@/widgets';

export const LayoutWithoutFooter = () => {
    return <Layout headerSlot={<Header />} />;
};
