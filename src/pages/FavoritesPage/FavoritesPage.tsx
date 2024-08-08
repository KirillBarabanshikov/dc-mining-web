import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { clearFavorites, IProduct, ProductCard } from '@/entities/product';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { RootState } from '@/shared/types';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const favorites: IProduct[] = useSelector((state: RootState) => state.products.favorites);
    const dispatch = useDispatch();

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
