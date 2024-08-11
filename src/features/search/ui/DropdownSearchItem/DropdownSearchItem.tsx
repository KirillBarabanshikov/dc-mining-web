import { useNavigate } from 'react-router-dom';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import styles from './DropdownSearchItem.module.scss';
import { IProduct } from '@/entities/product';
import { FC } from 'react';

interface IDropdownSearchItem {
    product: IProduct;
}

export const DropdownSearchItem: FC<IDropdownSearchItem> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate(`/product/${product.id}/${product.slug}`)}>
            <SearchIcon className={styles.icon} />
            <div className={styles.name}>{product.title}</div>
        </div>
    );
};
