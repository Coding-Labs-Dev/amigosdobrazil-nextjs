export const convertToCurrency = (value: string | number, currency = 'BRL') => Number(value).toLocaleString(
  'pt',
  {
    style: 'currency',
    currency,
  }
);
