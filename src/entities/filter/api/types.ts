import { IProductDto } from '@/entities/product/api';

export interface IFilterDto {
    id: number;
    category: string;
    characteristics: string;
    lists: string[];
    start?: number;
    end?: number;
}

export interface IFilterBody {
    type: string;
    characteristics?: string;
    price?: string;
    tags?: string;
    brand?: string;
    sortBy?: string;
    sortOrder?: string;
    profitable?: boolean;
    powerful?: boolean;
    customFilters?: string;
}

export interface IOfferDto {
    id: number;
    category: string;
    productTags: {
        id: number;
        title: string;
        color: string;
    }[];
}

export interface IFilteredDataDto {
    total_items: number;
    items: IProductDto[];
}
