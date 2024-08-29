import { Mask } from 'react-text-mask';

export const PHONE_MASK = (rawValue: string): Mask => {
    const hasDigits = rawValue.length > 3;
    return [
        '+',
        '7',
        ' ',
        ...(hasDigits ? ['(', /\d/, /\d/, /\d/, ')', ' '] : []),
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
    ];
};
