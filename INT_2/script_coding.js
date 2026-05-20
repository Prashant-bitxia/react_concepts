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
// console.log(removeDuplicate(arr));

// =======================> the panagram string checker <===============================================

function isPanagram(str) {
  const cleanstr = str.toLowerCase().replace(/[^a-z]/g, "");

  const uniqueLetter = new Set(cleanstr);

  return uniqueLetter.size === 26;
}

// console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
// console.log(isPanagram("Hello World"));

// ===========> convert the time from 12hrs to 24 hrs <====================================

// like time = 01:03 PM to 13:03 PM <==

function convertTo24Hour(time12h) {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours === "12") hours = modifier === "AM" ? "00" : "12";

  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes}`;
}

console.log(convertTo24Hour("01:03 PM"));
console.log(convertTo24Hour("12:00 AM"));

// ===========> LRU cache  <====================================
// now we have to make the LRU cache mean example if we add the something more then it remove the least recently used key
// it will be like this:->

// name : rahul
// location : delhi

class LRUCache {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return null;

    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.max) {
      this.cache.delete(this.first());
    }

    this.cache.set(key, value);
  }

  first() {
    return this.cache.keys().next().value;
  }

  showCache() {
    return console.log(Object.fromEntries(this.cache));
  }
}

// --- Execution ---
const myCache = new LRUCache(5);

myCache.put("a", 1);
myCache.put("b", 2);
myCache.put("c", 3);
myCache.put("d", 4);
myCache.put("e", 5);

myCache.showCache();

myCache.put("f", 6);

myCache.showCache();



// ===========> change the object key name to user to user-name means add - in the key  <====================================

let obj={
  user:"john",
  age:30
}
let name = {...obj, "user-name": obj.user};
delete name.user;

console.log(name);

// ====> 2nd way <==========
let obj1={
  "user-name":"john",
  age:30
}

const { "user-name": userName, age } = obj1;

console.log(userName); // "john"
console.log(age);