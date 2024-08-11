export interface ICategoryDto {
    id: number;
    title: string;
    image?: string;
    display: boolean;
    subCategory: {
        id: number;
        title: string;
    }[];
}
