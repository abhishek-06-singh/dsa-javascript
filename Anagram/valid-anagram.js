// * Ques = Valid Anagram
// * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase , using all the originol letters exactly ones .

// ! FIRST SOLUTION
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

console.log(isAnagram("anagram", "nagara"));
