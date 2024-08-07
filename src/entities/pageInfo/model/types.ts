export interface IAboutInfo {
    id: number;
    description: string;
    image: string;
    advantages: IAdvantage[];
    massMedia: IMassMedia[];
    partners: {
        id: number;
        image: string;
    }[];
    main: string;
}

export interface IAdvantage {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface IMassMedia {
    id: number;
    image: string;
    dateAt: string;
    title: string;
    description: string;
    display: boolean;
}

export interface ILeasingInfo {
    id: number;
    description: string;
    information: {
        id: number;
        title: string;
        description: string;
    }[];
    steps: {
        id: number;
        number: number;
        description: string;
    }[];
    informationTitle: string;
}
