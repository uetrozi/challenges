console.clear();

const saveButton = document.querySelector('[data-js="save-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const restoreButton = document.querySelector('[data-js="restore-button"]');
const skipButton = document.querySelector('[data-js="skip-button"]');
const buttonContainer = document.querySelector(
  '[data-js="custom-button-container"]'
);

function handleSave() {
  console.log('saving')
}

// anonymous callback
// saveButton.addEventListener('click', () => {
//   console.log('save button was clicked')
// })

// named callback
saveButton.addEventListener('click', handleSave)

restoreButton.addEventListener('click', (event) => {
  console.log(event.target)
})

function handleRestore(e) {
  console.log(e.target)
}

restoreButton.addEventListener('click', handleRestore)


// const alertButton = Button("show alert message", () => {
//   alert("Hello world!");
// });
// buttonContainer.append(alertButton);





function Button(text, callback) {
  const buttonElement = document.createElement('button')
  buttonElement.textContent = text
  buttonElement.addEventListener('click', callback)
  return buttonElement
}


const alertButton = Button('Click', () => {
    console.log('i was clicked 🐶')
});
buttonContainer.append(alertButton);

// function handleAlert() {
//     console.log('i was clicked 🐶')
// }
// const alertButton = Button('Click', handleAlert);
// buttonContainer.append(alertButton);