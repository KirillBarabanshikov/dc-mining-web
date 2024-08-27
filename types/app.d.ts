declare global {
    declare type RootState = import('../src/app/store').RootState;
    declare type AppDispatch = import('../src/app/store').AppDispatch;

    declare module 'react-google-recaptcha';

    interface Window {
        dataLayer: Record<string, any>[];
    }
}

export {};
