console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const items of programmingLanguages) {
  const newItems = document.createElement("li");
  newItems.textContent = items;
  ol.append(newItems);
}

// --^-- write/change code here --^--
