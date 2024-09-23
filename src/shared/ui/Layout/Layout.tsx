import { FC, PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Layout.module.scss';

interface ILayoutProps extends PropsWithChildren {
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    bottomSlot?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ headerSlot, footerSlot, bottomSlot, children }) => {
    return (
        <div className={clsx(styles.layout, !footerSlot && styles.withoutFooter)}>
            {headerSlot}
            <main>{children}</main>
            {bottomSlot}
            {footerSlot}
        </div>
    );
};
