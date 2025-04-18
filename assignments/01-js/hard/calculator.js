/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor () {
    this.result = 0
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num){
    if (num === 0){
      throw new Error("Cannot divide by zero")
    }
    this.result /= num
  }
  clear(){
    this.result = 0
  }
  getResult(){
    return this.result
  }

  hasInvalidCharacters(expression){
    const pattern = /^[0-9+\-*/().\s]+$/
    return !pattern.test(expression)
  }

  hasValidParantheses(expression){
    let stack = []
    for (let char of expression){
      if (char === "(") stack.push(char)
      else if (char === ")") {
        if (stack.length === 0) return false
        stack.pop()
      }
    }
    return stack.length === 0
  }

  containsDivisionByZero(expression){
    const cleaned = expression.replace(/\s+/g,"")
    return cleaned.includes("/0")
  }

  calculate(expression){
    if (typeof expression !== "string"){
      throw new Error("Expression must be a string")
    }

    if (this.hasInvalidCharacters(expression)) {
      throw new Error("Expression contains invalid characters")
    }

    if (!this.hasValidParantheses(expression)){
      throw new Error("Invalid parentheses")
    }

    if (this.containsDivisionByZero(expression)){
      throw new Error("Division by zero")
    }

    try {
      const cleaned = expression.replace(/\s+/g,"")
      const evaluated = Function(`"use strict"; return (${cleaned})`)()
      this.result = evaluated;
      return this.result
    }catch(error){
      throw new Error("Invalid expression");
    }
  }
}

calculator = new Calculator()
console.log(calculator.calculate("(55+6)*(5)"))

module.exports = Calculator;