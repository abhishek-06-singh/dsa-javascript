//! Write a function that checks if a given number is a palindrome. A palindrome is a string that reads the same forward and backward ?

// ! Input: x =121;
// ! Output: True;

// ! Input: x = 534;
// ! Output: False;

const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x < 10) return true;
  return x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(0);
console.log(res);

// * toString convert number to string example = 121 => "121"

// * .split convert string to array and split example = "121" => ["1", "2", "3"]

// ! + symbol is the unary plus operator here it is converting string back to number
