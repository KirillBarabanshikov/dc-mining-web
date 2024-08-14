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
