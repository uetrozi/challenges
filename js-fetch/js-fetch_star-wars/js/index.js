import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

const url = "https://swapi.dev/api/people";

console.clear();

// --v-- your code below this line --v--
async function fetchDataAndRender() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const starWarsObjects = data.results;

      starWarsObjects.forEach((person) => {
        const personCard = Card(person);
        renderElement(personCard);

        console.log(person);
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

fetchDataAndRender();
