declare global {
    declare type RootState = import('../src/app/store/store.ts').RootState;
    declare type AppDispatch = import('../src/app/store/store.ts').AppDispatch;

    declare module 'react-google-recaptcha';

    interface Window {
        dataLayer: Record<string, any>[];
        __INITIAL_DATA__: any;
    }

    declare const ym: any;
    declare const mgo: any;
}

export {};
