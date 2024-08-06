import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '@/entities/category';
import styles from './CategoryCard.module.scss';

interface ICategoryCardProps {
    category: ICategory;
}

export const CategoryCard: FC<ICategoryCardProps> = ({ category }) => {
    return (
        <Link to={'/catalog'} className={styles.categoryCard}>
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
        </Link>
    );
};
