import { Button } from '@/shared/ui';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/shared/lib';
import { IProduct, ProductCard } from '@/entities/product';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './FavoritesPage.module.scss';
import { clearFavorites } from '@/entities/favorites';

// TODO
const FavoritesPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    const favorites: IProduct[] = useAppSelector((state) => state.favorites.products);
    const dispatch = useAppDispatch();

    return (
        <section className={styles.favorites}>
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
