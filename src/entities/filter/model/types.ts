export interface IFilter {
    id: number;
    category: {
        key: string;
        characteristics: string;
    };
    list: {
        name: string;
        value: string;
    }[];
}
