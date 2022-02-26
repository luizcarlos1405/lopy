export const stripNonDigits = str => str.replace(/[^\d]/g, '');

export const formatMoney = (value, { showSign = true } = {}) => {
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

        acc[0] = `${char}${acc[0]}`;

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

export const moveArrayItem = (array, fromIndex, toIndex) => {
  if (!(array[fromIndex] && array[toIndex])) {
    console.warning('Tried to move elements from out of bounds index:', {
      array,
      fromIndex,
      toIndex,
    });
    return;
  }

  const newArray = [...array];
  const moveItem = newArray[fromIndex];

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, moveItem);

  return newArray;
};

export const isClient = () => typeof window !== 'undefined';
