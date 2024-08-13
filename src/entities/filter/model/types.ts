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
