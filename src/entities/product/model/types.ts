export type TProductCardViewMode = 'tile' | 'simple';

export interface IProduct {
    id: number;
    title: string;
    shortDescription: string;
    oldPrice: number;
    price: number;
    description: string;
    category: IProductCategory;
    value: IProductValue[];
    images: IProductImage[];
    tags: IProductTag[];
    display: boolean;
    payments: IProductPayment[];
    deliveries: IProductDelivery[];
}

interface IProductCategory {
    id: number;
    title: string;
    image: string;
    display: boolean;
    countOfProducts: number;
}

interface IProductValue {
    id: number;
    title: string;
    display: boolean;
    valueInKey: string;
    unitInKey: string;
}

interface IProductImage {
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