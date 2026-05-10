module.exports = function toReadable(number) {
  const integerString = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenString = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < 0) {
    return '';
  }
  if (number < 20) {
    return integerString[number];
  }
  if (number < 100) {
    let ten = tenString[Math.floor(number / 10)];
    let integer = number % 10;
    if (integer === 0) {
      return ten;
    }
    return ten + ' ' + integerString[integer];
  }
  if (number < 1000) {
    let hundred = integerString[Math.floor(number / 100)];
    let remainder = number % 100;
    if (remainder === 0) {
      return hundred + ' hundred';
    }
    return hundred + ' hundred ' + toReadable(remainder);
  }
};

