import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '@/entities/product';
import { formatter } from '@/shared/lib';
import { BASE_URL } from '@/shared/consts';
import styles from './RecentProductCard.module.scss';

interface IRecentProductCardProps {
    product: IProduct;
}

export const RecentProductCard: FC<IRecentProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <article className={styles.card} onClick={() => navigate(`/product/${product.id}/${product.slug}`)}>
            <img src={BASE_URL + product.images[0]?.image} alt={product.title} />
            <div>
                <p className={styles.name}>{product.title}</p>
                <p className={styles.price}>{formatter.format(product.price)}</p>
            </div>
        </article>
    );
};
