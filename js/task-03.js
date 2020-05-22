const findLongestWord = function(string) {
  const words = string.split(' ');
  let firstWord = words[0];

  // eslint-disable-next-line
  for (const word of words) {
    if (word.length > firstWord.length) {
      firstWord = word;
    }
  }
  return firstWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
