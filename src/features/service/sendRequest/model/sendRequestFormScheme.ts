import * as yup from 'yup';

export const sendRequestFormScheme = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    buy: yup.number().integer().required(),
    title: yup.string().required(),
    address: yup.string().required(),
    description: yup.string().required(),
    mediaFile: yup.mixed(),
});

export type TSendRequestFormScheme = yup.InferType<typeof sendRequestFormScheme>;
