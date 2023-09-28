let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
  expression += num;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function calculate() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
}
