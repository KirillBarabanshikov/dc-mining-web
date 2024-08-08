export interface IContacts {
    id: number;
    phone: string;
    email: string;
    office: string;
    images: IContactsImages[];
}

interface IContactsImages {
    id: number;
    image: string;
    url: string;
}
