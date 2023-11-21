console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const starWarsObjects = data.results;
      const r2d2 = starWarsObjects.find((person) =>
        person.name.startsWith("R2")
      );

      console.log(r2d2.eye_color);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

fetchData();
