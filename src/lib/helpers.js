export const stripNonDigits = str => str.replace(/[^\d]/g, '');

export const formatMoney = (
  value,
  { showSign = true, thousandsSeparator = '.', decimalSeparator = ',' } = {}
) => {
  const sign = showSign && Math.sign(value) < 0 ? '-' : '';
  const amount = Math.abs(value);
  const whole = Math.floor(amount / 100);
  const decimal = amount - whole * 100;

  const thousandsSeparatedWhole = `${whole}`
    .split('')
    .reduceRight(
      (acc, char, index, array) => {
        const maxIndex = array.length;
        const reversedIndex = maxIndex - index;
        const isThirdFromRight =
          reversedIndex &&
          reversedIndex !== maxIndex &&
          reversedIndex % 3 === 0;
        const group = `${char}${acc[0]}`;

        acc[0] = group;

        if (isThirdFromRight) {
          return ['', ...acc];
        }

        return acc;
      },
      ['']
    )
    .join('.');
  const twoDigitsDecimal = `${decimal}`.padStart(2, '0');

  return `R$${sign}${thousandsSeparatedWhole},${twoDigitsDecimal}`;
};

export const isClient = () => typeof window !== 'undefined';
