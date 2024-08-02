export interface IMenuItem {
    title: string;
    children?: { title: string; path: string }[];
    path: string;
}

export const horizontalMenuItems: IMenuItem[] = [
    {
        title: 'ASIC майнеры',
        path: '/catalog',
        children: [
            { title: 'Bitmain', path: '/catalog' },
            { title: 'Whatsminer', path: '/catalog' },
            { title: 'Iceriver', path: '/catalog' },
            { title: 'Jasminer', path: '/catalog' },
            { title: 'Elphapex', path: '/catalog' },
        ],
    },
    {
        title: 'Контейнеры для майнинг ферм',
        path: '/catalog',
        children: [
            { title: 'Контейнер S-size', path: '/catalog' },
            { title: 'Контейнер M-size', path: '/catalog' },
            { title: 'Контейнер L-size', path: '/catalog' },
        ],
    },
    {
        title: 'Прошивки для оборудования',
        path: '/catalog',
        children: [
            { title: 'Bitmain', path: '/catalog' },
            { title: 'Whatsminer', path: '/catalog' },
            { title: 'Iceriver', path: '/catalog' },
            { title: 'Jasminer', path: '/catalog' },
            { title: 'Elphapex', path: '/catalog' },
        ],
    },
    {
        title: 'Комплектующие',
        path: '/catalog',
        children: [
            { title: 'Блоки питания', path: '/catalog' },
            { title: 'Хэш платы', path: '/catalog' },
            { title: 'Платы управления', path: '/catalog' },
            { title: 'Системы охлаждения', path: '/catalog' },
            { title: 'Кабели', path: '/catalog' },
        ],
    },
    {
        title: 'Ремонт и сервис',
        path: '/service',
    },
    {
        title: 'Размещение в дата центре',
        path: '/data-center',
    },
    {
        title: 'Полезные ссылки',
        path: '',
    },
];
