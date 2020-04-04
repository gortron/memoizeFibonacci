const memoizeFib = (n) => {
  const cache = {};
  const fibonacci = (n) => {
    if (cache[n]) {
      // console.log(`Getting ${n} from the cache`);
      return cache[n];
    }
    
    if (n < 3) {
      cache[n] = n - 1;
      return n - 1;
    }
    
    let solution = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = solution;
    return solution;
  };
  return { fibonacci, cache };
};
