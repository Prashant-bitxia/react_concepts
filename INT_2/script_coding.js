// Q1  find the longest word in the string and return it or paragraph

function findLongestWord(line) {
  const longestWord = line.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  return longestWord;
}

// Example usage:
const line = "this is the biggtest thing to do";
// console.log(findLongestWord(line));

// Q2 write the code in which remov ethe duplicates from the array without usign set

function removeDuplicate(arr) {
  const uniqueArray = arr.filter((item, index) => {
    return arr.indexOf(item) == index;
  });

  return uniqueArray;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 5, 6];
console.log(removeDuplicate(arr));
