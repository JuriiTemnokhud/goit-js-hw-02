const calculateEngravingPrice = function(message, pricePerWord) {
  // твой код
  console.log(message, pricePerWord);

  const words = message.split(' ');
  console.log(words.length);
  const result = words.length * pricePerWord;
  console.log(message, result);
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
