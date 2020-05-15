let result = [];
let findLongestWord = function(string) {
  const words = string.split(' ');
  for (const word of words) {
    console.log(word);
    let longestWord = word.length;
    console.log(longestWord);
  }
  if (longestWord.length <= word.length) {
    longestWord = word.length;
    console.log(longestWord);
    // continue;
  }

  return result;
  console.log(result);
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
