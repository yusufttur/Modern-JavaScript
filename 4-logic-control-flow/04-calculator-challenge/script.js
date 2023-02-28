function calculator(num1, num2, operator) {
  const operators = ['+', '-', '*', '/'];
  let result;
  if (!operators.includes(operator)) {
    console.log('Invalid Operator');
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }
    return console.log(`${num1} ${operator} ${num2} = ${result}`);
  }
}

calculator(2, 3, '-'); // 2 - 3 = -1
calculator(2, 3, '&'); // Invalid Operator
