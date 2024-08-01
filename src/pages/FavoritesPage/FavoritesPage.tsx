import { Button } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);

    return (
        <section className={styles.favorites}>
            <div className={'container'}>
                <div className={styles.head}>
                    <h1 className={'section-title-secondary'}>Избранное</h1>
                    <Button variant={'outline'} size={matches ? 'sm' : 'md'}>
                        Очистить
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FavoritesPage;
