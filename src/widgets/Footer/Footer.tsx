import React from 'react';
import Logo from '@/shared/assets/logo.svg?react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={'container'}>
                <Logo />
            </div>
        </footer>
    );
};
