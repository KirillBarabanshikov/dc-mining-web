export interface ICategory {
    id: number;
    title: string;
    image: string;
    display: boolean;
    name: string;
    slug: string;
    subCategory: {
        id: number;
        title: string;
    }[];
}
