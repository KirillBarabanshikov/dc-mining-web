export const CHARACTERISTICS: Record<string, string> = {
    ['Бренд']: 'brand',
    ['Алгоритм']: 'algorithm',
    ['Добываемые монеты']: 'coin',
    ['Тип']: '',
    ['Доход в месяц']: '',
    ['Мощность']: '',
    ['Количество мест']: 'seats',
    ['Производитель']: '',
} as const;

export const CHARACTERISTICS_KEYS: Record<string, string> = {
    brand: 'Бренд',
    algorithm: 'Алгоритм',
    coin: 'Добываемые монеты',
    ['Тип']: '',
    ['Доход в месяц']: '',
    ['Мощность']: '',
    seats: 'Количество мест',
    ['Производитель']: '',
} as const;
