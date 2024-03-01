/* eslint-disable no-restricted-globals */
// Say hello let'us build a calculator
alert("Hello there, let'us build a calculator");
let num1;
let num2;
let isValid = false;

while (!isValid) {
  num1 = Number(prompt('please entre your first number'));
  num2 = Number(prompt('please entre your second number'));

  if (num1 === null || num2 === null) {
    alert('Input canceled. Please try again.');
    continue;
  }

  if (!isNaN(num1) && !isNaN(num2)) {
    isValid = true; // Break out of the loop if both inputs are valid numbers
  } else {
    alert('Please enter valid numbers.');
  }
}
let operator;
isValid = false;
while (!isValid) {
  operator = prompt('please choose one of those (+, -, /, %, *, **)');

  if (['+', '-', '/', '%', '*', '**'].includes(operator)) {
    isValid = true;
  } else {
    alert('Please enter valid operator.');
  }
}

let result = '';

if (operator === '+') {
  result = num1 + num2;
} else if (operator === '-') {
  result = num1 - num2;
} else if (operator === '') {
  result = num1 - num2;
} else if (operator === '/') {
  result = num1 / num2;
} else if (operator === '%') {
  result = num1 % num2;
} else if (operator === '*') {
  result = num1 * num2;
} else if (operator === '**') {
  result = num1 ** num2;
} else {
  alert('invalid operator');
}

alert(`result: ${result}`);
