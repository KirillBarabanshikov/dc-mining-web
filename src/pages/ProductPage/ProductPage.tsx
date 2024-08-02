import { Breadcrumbs } from '@/shared/ui';

const paths = [
    { name: 'Главная', path: '/' },
    { name: 'ASIC майнеры', path: '/catalog' },
    { name: 'Antminer S19k Pro – 120 TH', path: '/product' },
];

const ProductPage = () => {
    return (
        <div>
            <div className={'container'}>
                <Breadcrumbs paths={paths} />
            </div>
        </div>
    );
};

export default ProductPage;
