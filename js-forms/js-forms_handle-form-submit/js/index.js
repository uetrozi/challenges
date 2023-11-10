console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  event.target.reset();
  event.target.elements.firstName.focus();

  const age = event.target.elements.age.value;
  const badness = event.target.elements.badness.value;
  const ageBadnessSum = age + badness;
  console.log("The age-badness-sum is: " + ageBadnessSum);
});
