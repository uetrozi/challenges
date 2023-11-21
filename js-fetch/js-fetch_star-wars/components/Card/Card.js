// --^-- your code here --^--
export function Card(characterData) {
  const card = document.createElement("article"); // Create a new article Element
  card.classList.add("card"); // Add the class 'card'

  // Fill the article element with content.
  const heading = document.createElement("h2");
  heading.textContent = characterData.name;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${characterData.eye_color}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${characterData.birth_year}`;

  card.append(birthYear);

  const gender = document.createElement("p");
  gender.textContent = `Gender: ${characterData.gender}`;

  card.append(gender);

  const height = document.createElement("p");
  height.textContent = `Height: ${characterData.height}`;

  card.append(height);

  const mass = document.createElement("p");
  mass.textContent = `Mass: ${characterData.mass}`;

  card.append(mass);

  const hairColor = document.createElement("p");
  hairColor.textContent = `Hair color: ${characterData.hair_color}`;

  card.append(hairColor);

  const homeworld = document.createElement("a");
  homeworld.textContent = `Homeworld: ${characterData.homeworld}`;

  card.append(homeworld);

  const skin_color = document.createElement("p");
  skin_color.textContent = `Skin Color: ${characterData.skin_color}`;

  card.append(skin_color);

  return card;
}
