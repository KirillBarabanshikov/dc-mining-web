import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_MD } from '@/shared/consts';
import { CompareList, RecentProductsList } from '@/widgets';
import { clearCompare } from '@/entities/product';
import styles from './ComparePage.module.scss';

const ComparePage = () => {
    const matches = useMediaQuery(MAX_WIDTH_MD);
    const dispatch = useDispatch();

    return (
        <div className={'sections'}>
            <section className={styles.compare}>
                <div className={'container'}>
                    <div className={styles.head}>
                        <h1 className={'section-title-secondary'}>Сравнение</h1>
                        <Button
                            variant={'outline'}
                            size={matches ? 'sm' : 'md'}
                            onClick={() => dispatch(clearCompare())}
                        >
                            Очистить
                        </Button>
                    </div>
                </div>
                <div className={'container scrollable'}>
                    <CompareList />
                </div>
            </section>
            <RecentProductsList />
        </div>
    );
};

export default ComparePage;
