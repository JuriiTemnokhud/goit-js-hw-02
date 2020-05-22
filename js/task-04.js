const formatString = function (string) {
  const lengthString = string.length;
  // console.log(lengthString);
  const hString = lengthString < 40;

  if (lengthString > 40) {
    const splitString = string.split('');
    console.log((splitString.length = 40));
    console.log(splitString.push('...'));
    // console.log(splitString.join(''));

    return splitString.join('');
  }

  // if (lengthString < 40) {
  //   return string;
  // }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
