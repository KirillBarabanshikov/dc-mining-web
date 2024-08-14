import { IProduct } from '@/entities/product';

export interface IFilter {
    id: number;
    category: {
        name: string;
        value: string;
    };
    characteristics: {
        name: string;
        value: string;
    };
    lists: string[];
    start?: number;
    end?: number;
}

export interface IFilteredData {
    countProducts: number;
    products: IProduct[];
}
