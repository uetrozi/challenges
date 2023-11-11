console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successSubmit = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  successSubmit.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    showSuccess();
    return alert("Form submitted");
  }
  // --^-- write your code here --^--
});
