import { useEffect, useState } from 'react';

export const useBodyScrollLock = () => {
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflowY = isLocked ? 'hidden' : 'auto';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    }, [isLocked]);

    return { isLocked, setIsLocked };
};
