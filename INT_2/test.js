function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      console.log("inside the cache");
      return cache[key];
    }

    console.log("outside the cache");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const result = memoize(add);
console.log(result(1, 2));
console.log(result(1, 2));
