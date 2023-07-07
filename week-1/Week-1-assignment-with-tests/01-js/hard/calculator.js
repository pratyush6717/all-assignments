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
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
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

  divide(num) {
    if(num==0){
      throw new Error('Error');
    }
    else{
    this.result /= num;
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const parsedExpression = expression.replace(/\s+/g, '');
    const operators = ['+', '-', '*', '/'];
    const operands = [];
    const operatorsStack = [];

    let currentNumber = '';

    for (let i = 0; i < parsedExpression.length; i++) {
      const char = parsedExpression[i];

      if (operators.includes(char)) {
        if (currentNumber === '') {
          throw new Error('Invalid expression');
        }

        operands.push(Number(currentNumber));
        currentNumber = '';

        while (
          operatorsStack.length > 0 &&
          isHigherPrecedence(operatorsStack[operatorsStack.length - 1], char)
        ) {
          const rightOperand = operands.pop();
          const leftOperand = operands.pop();
          const operator = operatorsStack.pop();

          operands.push(applyOperation(leftOperand, operator, rightOperand));
        }

        operatorsStack.push(char);
      } else if (!isNaN(char)) {
        currentNumber += char;
      }
    }

    if (currentNumber === '') {
      throw new Error('Invalid expression');
    }

    operands.push(Number(currentNumber));

    while (operatorsStack.length > 0) {
      const rightOperand = operands.pop();
      const leftOperand = operands.pop();
      const operator = operatorsStack.pop();

      operands.push(applyOperation(leftOperand, operator, rightOperand));
    }

    this.result = operands[0];

    return this.result;
  }
}

function isHigherPrecedence(operator1, operator2) {
  if ((operator1 === '*' || operator1 === '/') && (operator2 === '+' || operator2 === '-')) {
    return true;
  }

  if ((operator1 === '+' || operator1 === '-') && (operator2 === '*' || operator2 === '/')) {
    return false;
  }

  return false;
}

function applyOperation(leftOperand, operator, rightOperand) {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    case '/':
      return leftOperand / rightOperand;
  }
}


module.exports = Calculator;
