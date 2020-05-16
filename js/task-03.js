const findLongestWord = function(string) {
  const result = [];
  const words = string.split(' ');
  const firstWord = words[0];
  let first = firstWord.length;
  // console.log(first);

  // eslint-disable-next-line no-restricted-syntax
  for (const word of words) {
    const longestWord = word.length;
    // console.log(longestWord);

    if (first <= longestWord) {
      first = longestWord;
      console.log(first);
    }
  }
  return result;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
