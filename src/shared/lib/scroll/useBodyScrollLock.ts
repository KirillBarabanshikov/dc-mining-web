import { useEffect, useState } from 'react';

export const useBodyScrollLock = () => {
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflowY = isLocked ? 'hidden' : 'scroll';
        document.body.style.paddingRight = isLocked ? `${scrollbarWidth}px` : '0px';
    }, [isLocked]);

    return { isLocked, setIsLocked };
};
