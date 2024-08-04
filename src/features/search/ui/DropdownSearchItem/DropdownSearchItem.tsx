import { useNavigate } from 'react-router-dom';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import styles from './DropdownSearchItem.module.scss';

export const DropdownSearchItem = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate('/product')}>
            <SearchIcon className={styles.icon} />
            <div className={styles.name}>Asic майнер Bitmain Antminer L7 9500 MH/s</div>
        </div>
    );
};
