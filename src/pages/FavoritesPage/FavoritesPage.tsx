import { Helmet } from 'react-helmet-async';
import { Button } from '@/shared/ui';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { clearFavorites, ProductCard } from '@/entities/product';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector((state) => state.products);

    return (
        <section className={styles.favorites}>
            <Helmet>
                <title>Избранное</title>
            </Helmet>
            <div className={'container'}>
                <div className={styles.head}>
                    <h1 className={'section-title-secondary'}>Избранное</h1>
                    <Button variant={'outline'} size={matches ? 'sm' : 'md'} onClick={() => dispatch(clearFavorites())}>
                        Очистить
                    </Button>
                </div>
                <div className={styles.wrap}>
                    {favorites.map((product) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default FavoritesPage;
