import { formatPhoneNumber } from '@/shared/lib';

export const getMangoNumber = () => {
    const script: any = document.querySelector(`script[src="//widgets.mango-office.ru/site/33382"]`);

    if (script) {
        if (script.readyState === 'complete') {
            mgo(function (mgo: any) {
                console.log(mgo);

                mgo?.getNumber('', function (result: any) {
                    console.log(result);

                    document.querySelectorAll('.mgo-number').forEach(function (elem: any) {
                        elem.innerText = formatPhoneNumber(result.number);
                    });
                });
            });
        } else {
            script.addEventListener('load', () => {
                mgo(function (mgo: any) {
                    console.log(mgo);

                    mgo?.getNumber('', function (result: any) {
                        console.log(result);

                        document.querySelectorAll('.mgo-number').forEach(function (elem: any) {
                            elem.innerText = formatPhoneNumber(result.number);
                        });
                    });
                });
            });
        }
    } else {
        console.log('Скрипт не найден в index.html');
    }

    return '';
};
