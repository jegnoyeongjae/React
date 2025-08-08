export const formattedPrice = (value) => {
    const formatted = value.toLocaleString('ko-KR', {style: 'currency', currency: 'KRW'});
    return {
        symbol : formatted.substring(0, 1),
        number : formatted.substring(1)
    }
}