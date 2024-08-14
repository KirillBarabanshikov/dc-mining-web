export const CHARACTERISTICS: Record<string, string> = {
    ['Бренд']: 'brand',
    ['Алгоритм']: 'algorithm',
    ['Монета']: 'coin',
    ['Тип']: '',
    ['Доход в месяц']: '',
    ['Мощность']: '',
    ['Количество мест']: '',
    ['Производитель']: '',
} as const;

export const CHARACTERISTICS_KEYS: Record<string, string> = {
    brand: 'Бренд',
    algorithm: 'Алгоритм',
    coin: 'Монета',
    ['Тип']: '',
    ['Доход в месяц']: '',
    ['Мощность']: '',
    ['Количество мест']: '',
    ['Производитель']: '',
} as const;
