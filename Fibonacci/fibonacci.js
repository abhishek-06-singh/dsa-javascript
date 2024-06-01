// * Oues 2 Fibonacci Number
// * Fibonnaci Number series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233.....
// * if input  n = 3 it should return 2

// ! FIRST SOLUTION
var fibonacci = (n) => {
  const array = [0, 1];

  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array[n];
};

fibonacci(7);

// ! SECOND SOLUTION

var fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

fib(6);
