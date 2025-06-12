let display = document.getElementById('display');
let expression = "";

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
  expression += value;
}

function clearDisplay() {
  expression = "";
  display.innerText = "0";
}

function calculate() {
  try {
    let result = eval(expression);
    display.innerText = result;
    expression = result.toString();
  } catch (e) {
    display.innerText = "Error";
    expression = "";
  }
}

function backspace() {
  if (expression.length > 0) {
    expression = expression.slice(0, -1);
    display.innerText = expression.length > 0 ? expression : "0";
  }
}


function squareRoot() {
  try {
    let value = Math.sqrt(eval(expression));
    expression = value.toString();
    display.innerText = expression;
  } catch (e) {
    display.innerText = "Error";
    expression = "";
  }
}

function square() {
  try {
    let value = Math.pow(eval(expression), 2);
    expression = value.toString();
    display.innerText = expression;
  } catch (e) {
    display.innerText = "Error";
    expression = "";
  }
}
