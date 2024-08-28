import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
    const getMatches = (query: string): boolean => {
        if (typeof window === 'undefined') return false;

        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState<boolean>(() => {
        return getMatches(query);
    });

    function handleChange() {
        setMatches(getMatches(query));
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const matchMedia = window.matchMedia(query);

        handleChange();

        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange);
        } else {
            matchMedia.addEventListener('change', handleChange);
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange);
            } else {
                matchMedia.removeEventListener('change', handleChange);
            }
        };
    }, [query]);

    return matches;
};
