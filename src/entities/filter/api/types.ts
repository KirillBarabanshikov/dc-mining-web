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
    characteristics: string;
    price: string;
    tags: string;
}
