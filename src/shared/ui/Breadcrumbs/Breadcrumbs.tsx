import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/shared/assets/icons/arrow-right.svg?react';
import styles from './Breadcrumbs.module.scss';

interface IBreadcrumbsPath {
    name: string;
    path: string;
}

interface IBreadcrumbsProps {
    paths: IBreadcrumbsPath[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ paths }) => {
    return (
        <nav className={styles.breadcrumbs}>
            {paths.map((path, index) => {
                return (
                    <Fragment key={index}>
                        {index > 0 && <ArrowIcon />}
                        <Link to={path.path}>{path.name}</Link>
                    </Fragment>
                );
            })}
        </nav>
    );
};
