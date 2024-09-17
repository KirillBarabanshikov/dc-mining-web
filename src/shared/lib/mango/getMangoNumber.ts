export const getMangoNumber = () => {
    console.log('mgo', mgo);

    mgo(function (mg: any) {
        console.log('test', mg);

        mg?.getNumber('', function (result: any) {
            console.log('result', result);
            window.phone = result.number;
            console.log('phone', result.number);
        });
    });
};
