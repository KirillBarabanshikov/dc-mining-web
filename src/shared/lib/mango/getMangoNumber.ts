export const getMangoNumber = () => {
    console.log('mgo', mgo);

    mgo(function (test: any) {
        console.log('test', test);

        // Запрашиваем номер
        mgo?.getNumber('', function (result: any) {
            // Вставляем номер телефона во все теги с классом mgo-number
            document.querySelectorAll('.mgo-number').forEach(function (elem: any) {
                console.log('result', result);
                elem.innerText = result.number;
            });
        });
    });
};
