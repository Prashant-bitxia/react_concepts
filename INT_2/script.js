let array = ["apple", "banana", "orange", "grape", "mango"];

let container = document.getElementById("fruit_container");

let ul = document.createElement("ul");

array.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
});

container.appendChild(ul);

// ------- > Q1 <----------------------------------------------------------------------
const obj = [
  { key: "Sample 1", data: "Data 1" },
  { key: "Sample 1", data: "Data 1" },
  { key: "Sample 2", data: "Data 2" },
  { key: "Sample 3", data: "Data 3" },
];

// --------> 1 way of doing this code like group by the output with the key <------
const output = Object.groupBy(obj, (item) => item.key);
console.log("Grouped Object ", output);

// --------> 2 way of doing by reduce method

const obj2 = obj.reduce((acc, curr) => {
  const groupKey = curr.key;

  if (!acc[groupKey]) {
    acc[groupKey] = [];
  }

  acc[groupKey].push(curr);
  return acc;
}, {});

console.log("By Reduce method ", obj2);

// -----Q2 --------------------------------------------------------------------------
// we have to make a memozie function in which we pass the argunements to it numbers and function basically perform
// the addition between that numbers and if the same agurments pass again then that function give me the ans
// from the cache not by performing the addtion logic again on that numbers argument

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// ---- 2nd way of doing it with map ---------------
function memoize(fn) {
  // Initialize a Map instead of a plain object
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Usage:
const multiply = memoize((a, b) => a * b);

console.log(multiply(5, 5)); // Calculating and saving to Map... 25
console.log(multiply(5, 5)); // Fetching from Map cache... 25

console.log(multiply(2, 3));
console.log(multiply(2, 3));

// -----> Q3  flatten the array <----------------------------------------------------------
// quetiosn be like const a = [1,2,[3,4]];
// output =>  a=[1,2,3,4];

// ---- by js methods --------------

const nested = [1, [2, 3], [[4, 5]]];

console.log(nested.flat()); // [1, 2, 3, [4, 5]] (Default: 1 level)
console.log(nested.flat(2)); // [1, 2, 3, 4, 5] (2 levels)

const superNested = [1, [2, [3, [4, [5]]]]];
console.log("Flatten array by superNested.flat", superNested.flat(Infinity)); // [1, 2, 3, 4, 5]

// -------- by own method -----------------------
function deepFlatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? deepFlatten(val) : val);
  }, []);
}

const deeplyNested = [1, [2, [3, 4], 5]];
console.log("Deep Flatten array", deepFlatten(deeplyNested)); // [1, 2, 3, 4, 5]

// -------> to run quokka extension run this command ALT+Q

// ----------------> Remove the duplicates from the array <------------------------------------------------

// ------> 1 way
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log("Remove duplicates array elements", unique);

// ------> 2 way

const uniquieArr = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);

  return acc;
}, []);

console.log("unique arrays by reduce method => ", uniquieArr);
