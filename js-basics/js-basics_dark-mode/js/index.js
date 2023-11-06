console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkBtn = document.querySelector('[data-js="dark-mode-button"]');
const lightBtn = document.querySelector('[data-js="light-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');

// console.log(darkBtn);

darkBtn.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightBtn.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
