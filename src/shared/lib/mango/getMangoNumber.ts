export const getMangoNumber = () => {
    mgo(function (mg: any) {
        mg?.getNumber('', function (result: any) {
            window.phone = result.number;
        });
    });
};
