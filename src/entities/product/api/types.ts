import { IDelivery } from '@/entities/delivery';
import { ICategoryDto } from '@/entities/category/api';

export interface IProductDto {
    id: number;
    title: string;
    shortDescription: string;
    oldPrice?: number;
    price: number;
    description: string;
    category?: ICategoryDto;
    value: {
        id: number;
        title: string;
        display: boolean;
        valueInKey: string;
        unitInKey?: string;
    }[];
    images: {
        id: number;
        image: string;
    }[];
    tags: {
        id: number;
        title: string;
        color: string;
    }[];
    display: boolean;
    payments: IDelivery[];
    deliveries: IDelivery[];
}
