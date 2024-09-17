import { formatPhoneNumber } from '@/shared/lib';

export const getMangoNumber = () => {
    const script = document.querySelector(`script[src="//widgets.mango-office.ru/site/33382"]`);

    script!.addEventListener('load', () => {
        console.log('load');
        mgo(function (mgo: any) {
            mgo?.getNumber('', function (result: any) {
                document.querySelectorAll('.mgo-number').forEach(function (elem: any) {
                    elem.innerText = formatPhoneNumber(result.number);
                });
            });
        });
    });

    return '';
};
