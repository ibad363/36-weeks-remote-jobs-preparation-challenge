/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    countOfVowels = 0
    array_of_letters = str.toLowerCase().split("")
    
    array_of_letters.forEach((letter)=>{
      if ("aeiou".includes(letter)){
        countOfVowels += 1
      }
    })
    return countOfVowels
}

console.log(countVowels("aeioug ibad"))

module.exports = countVowels;