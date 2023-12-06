//Calculator challenge

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      if (num1 > num2) {
        result = num1 - num2;
      } else result = num2 - num1;
      break;

    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      console.log("Invalid operator.\nOperator must be +, -, *, /");
      break;
  }
  return result;
}

console.log(calculator(2, 3, "+"));
