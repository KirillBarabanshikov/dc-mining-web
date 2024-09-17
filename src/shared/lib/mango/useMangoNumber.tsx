import { useEffect } from 'react';

export const useMangoNumber = () => {
    useEffect(() => {
        mgo(function (mgo: any) {
            mgo?.getNumber('', function (result: any) {
                document.querySelectorAll('.mgo-number').forEach(function (elem: any) {
                    elem.innerText = result.number;
                });
            });
        });
    }, []);
};
