import { FC, Fragment } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/shared/assets/icons/arrow-right.svg?react';
import styles from './Breadcrumbs.module.scss';

interface IBreadcrumbsPath {
    name: string;
    path: string;
}

interface IBreadcrumbsProps {
    paths: IBreadcrumbsPath[];
    className?: string;
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ paths, className }) => {
    return (
        <nav className={clsx(styles.breadcrumbs, className)}>
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
