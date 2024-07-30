export interface IMenuItem {
    title: string;
    children?: { title: string; path: string }[];
    path?: string;
}

export const horizontalMenuItems: IMenuItem[] = [
    {
        title: 'ASIC майнеры',
        children: [
            { title: 'Bitmain', path: '' },
            { title: 'Whatsminer', path: '' },
            { title: 'Iceriver', path: '' },
            { title: 'Jasminer', path: '' },
            { title: 'Elphapex', path: '' },
        ],
    },
    {
        title: 'Контейнеры для майнинг ферм',
        children: [
            { title: 'Bitmain', path: '' },
            { title: 'Whatsminer', path: '' },
            { title: 'Iceriver', path: '' },
            { title: 'Jasminer', path: '' },
            { title: 'Elphapex', path: '' },
        ],
    },
    {
        title: 'Прошивки для оборудования',
        children: [
            { title: 'Bitmain', path: '' },
            { title: 'Whatsminer', path: '' },
            { title: 'Iceriver', path: '' },
            { title: 'Jasminer', path: '' },
            { title: 'Elphapex', path: '' },
        ],
    },
    {
        title: 'Комплектующие',
        children: [
            { title: 'Bitmain', path: '' },
            { title: 'Whatsminer', path: '' },
            { title: 'Iceriver', path: '' },
            { title: 'Jasminer', path: '' },
            { title: 'Elphapex', path: '' },
        ],
    },
    {
        title: 'Ремонт и сервис',
        path: '',
    },
    {
        title: 'Размещение в дата центре',
        path: '',
    },
    {
        title: 'Полезные ссылки',
        path: '',
    },
];
