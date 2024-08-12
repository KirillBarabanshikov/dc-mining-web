import { ICategory } from '@/entities/category';

export interface IOrderProduct {
    name: string;
    phone: string;
    productId: number;
    price: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    shortDescription: string;
    oldPrice?: number;
    price: number;
    description: string;
    category?: ICategory;
    value: IProductValue[];
    images: IProductImage[];
    tags: IProductTag[];
    display: boolean;
    payments: IProductPayment[];
    deliveries: IProductDelivery[];
    slug: string;
}

// interface IProductCategory {
//     id: number;
//     title: string;
//     image: string;
//     display: boolean;
//     countOfProducts: number;
// }

export interface IProductValue {
    id: number;
    title: string;
    display: boolean;
    valueInKey: string;
    unitInKey?: string;
    difference?: boolean;
}

export interface IProductImage {
    id: number;
    image: string;
}

interface IProductTag {
    id: number;
    title: string;
    color: string;
}

interface IProductPayment {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface IProductDelivery {
    id: number;
    image: string;
    title: string;
    description: string;
}
