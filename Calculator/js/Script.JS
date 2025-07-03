let currentInput = '0';
let operator = null;
let previousInput = null;

                        //Update data display funtion 
function updateDisplay() {
  document.getElementById('result').innerText = currentInput;
  document.getElementById('operation').innerText = previousInput ? `${previousInput} ${operator} ${currentInput}` : '';
}

                        //Clear data display funtion 
function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  updateDisplay();
}
                        //Delete last data display funtion 
function deleteLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay();
}
                        //Append number funtion 
function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}
                        //Append operator funtion 
function appendOperator(op) {
  if (operator !== null) {
    calculateResult();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = '0';
  updateDisplay();
}
                      //calulator operation function
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = (prev * current) / 100;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateDisplay();
}
