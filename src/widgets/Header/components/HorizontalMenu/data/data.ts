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
            { title: 'Контейнер S-size', path: '' },
            { title: 'Контейнер M-size', path: '' },
            { title: 'Контейнер L-size', path: '' },
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
            { title: 'Блоки питания', path: '' },
            { title: 'Хэш платы', path: '' },
            { title: 'Платы управления', path: '' },
            { title: 'Системы охлаждения', path: '' },
            { title: 'Кабели', path: '' },
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
