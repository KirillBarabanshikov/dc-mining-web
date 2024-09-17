export const getMangoNumber = () => {
    let number = '';

    mgo(function (mgo: any) {
        mgo?.getNumber('', function (result: any) {
            number = result.number;
        });
    });

    console.log(number);

    return number;
};
