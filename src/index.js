module.exports = function toReadable(number) {
  if (number < 0 || number > 999) {
    throw new Error('Number must be between of 1 and 999');
  }

  const integer = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let result = '';

  if (number < 20) {
    result = integer[number];
  } else if (number < 100) {
    result =
      tens[Math.floor(number / 10) - 2] +
      (number % 10 ? ` ${integer[number % 10]}` : '');
  } else if (number < 1000) {
    const remainder = number % 100;
    result = `${integer[Math.floor(number / 100)]} hundred`;
    if (remainder > 0) {
      result += ` ${toReadable(remainder)}`;
    }
  }
  return result;
};
