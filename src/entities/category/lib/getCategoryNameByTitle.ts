const names: Record<string, string> = {
    asicMiners: 'ASIC майнеры',
    containersMining: 'Контейнеры для майнинг ферм',
    firmware: 'Прошивки для оборудования',
    accessories: 'Комплектующие',
    accommodationDataCentre: 'Размещение в дата центре',
    repairAndService: 'Ремонт и сервис',
    usefulLinks: 'Полезные ссылки',
};

export function getCategoryNameByTitle(categoryTitle: string): string {
    return names[categoryTitle] ?? '';
}
