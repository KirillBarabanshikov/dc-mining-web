function cleanPhoneNumber(number: string): string {
    const cleanedPhoneNumber = ('' + number).replace(/\D/g, '');

    if (cleanedPhoneNumber.length !== 11) {
        throw new Error('Неверный формат номера телефона');
    }

    return cleanedPhoneNumber;
}

export function formatPhoneNumber(number: string) {
    const cleaned = cleanPhoneNumber(number);
    return cleaned.replace(/^8(\d{3})(\d{3})(\d{2})(\d{2})$/, '8 ($1) $2 $3 $4');
}

export function intFormatPhoneNumber(number: string) {
    const cleaned = cleanPhoneNumber(number);
    return '+7' + cleaned.substring(1);
}
