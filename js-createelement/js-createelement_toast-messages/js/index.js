console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("toast-container__message");
  li.textContent = "I'm new!";
  toastContainer.append(li);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
