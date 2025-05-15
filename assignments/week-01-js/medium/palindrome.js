/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  cleanString = str.toLowerCase().replace(/[^a-z0-9]/g,"").split("").reverse().join("")
  console.log(cleanString)
  if (str.toLowerCase().replace(/[^a-z0-9]/g,"") == cleanString) {
    return true;
  }else{
    return false
  }
}

console.log(isPalindrome("dada; dad"))

module.exports = isPalindrome;
