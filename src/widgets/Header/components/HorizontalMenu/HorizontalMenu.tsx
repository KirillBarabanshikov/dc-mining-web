import { Link } from 'react-router-dom';
import { horizontalMenuItems } from './data/data.ts';
import { MenuItemDropdown } from './components/MenuItemDropdown.tsx';
import styles from './HorizontalMenu.module.scss';
import { useMediaQuery } from '@/shared/lib';
import { MAX_WIDTH_XXL } from '@/shared/consts';

export const HorizontalMenu = () => {
    const matches = useMediaQuery(MAX_WIDTH_XXL);

    return (
        <nav className={styles.horizontalMenu}>
            <ul className={styles.horizontalMenuList}>
                {horizontalMenuItems.map((item, index) => {
                    if (item.children !== undefined) {
                        return <MenuItemDropdown key={index} item={item} />;
                    }

                    if (item.path !== undefined && !matches) {
                        return (
                            <li key={index} className={styles.horizontalMenuItem}>
                                <Link to={item.path} className={styles.horizontalMenuLink}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
};
