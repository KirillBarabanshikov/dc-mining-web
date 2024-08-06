import * as yup from 'yup';

export const orderCallFormScheme = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    checked: yup.bool().oneOf([true]),
});

export type TOrderCallFormScheme = yup.InferType<typeof orderCallFormScheme>;