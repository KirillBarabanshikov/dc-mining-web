import * as yup from 'yup';

export const orderProductFormScheme = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    // productName: yup.string().required(),
    // price: yup.string().required(),
    // count: yup.number().required(),
    // checked: yup.boolean().required(),
});

export type TOrderProductFormScheme = yup.InferType<typeof orderProductFormScheme>;
