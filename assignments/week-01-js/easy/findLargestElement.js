/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    max = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}
numbers = [1.2,5.4,5.3,44,-74,8,0]
console.log(findLargestElement(numbers))

module.exports = findLargestElement;