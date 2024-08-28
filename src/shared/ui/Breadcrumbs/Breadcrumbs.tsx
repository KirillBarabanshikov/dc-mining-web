import { FC, Fragment } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/shared/assets/icons/arrow-right.svg?react';
import styles from './Breadcrumbs.module.scss';

interface IBreadcrumbsPath {
    name: string;
    path?: string;
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
                        {path.path ? (
                            <Link to={path.path} className={styles.link}>
                                {path.name}
                            </Link>
                        ) : (
                            <span className={styles.link}>{path.name}</span>
                        )}
                    </Fragment>
                );
            })}
        </nav>
    );
};
