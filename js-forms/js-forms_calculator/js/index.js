console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const numberA = Number(event.target.elements.numberA.value);
  const numberB = Number(event.target.elements.numberB.value);
  let operator = event.target.elements.operator.value;
  let result;

  switch (operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
