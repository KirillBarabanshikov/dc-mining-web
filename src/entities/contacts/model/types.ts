export interface IContacts {
    id: number;
    phone: string;
    email: string;
    socials: IContactsSocials[];
}

interface IContactsSocials {
    id: number;
    image: string;
    url: string;
}
