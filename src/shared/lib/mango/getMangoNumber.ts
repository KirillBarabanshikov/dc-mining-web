export const getMangoNumber = () => {
    let number = '';

    console.log(mgo());

    mgo(function (mgo: any) {
        console.log(mgo);

        mgo?.getNumber('', function (result: any) {
            number = result.number;
        });
    });

    console.log(number);

    return number;
};
