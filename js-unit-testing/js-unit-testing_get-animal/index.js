export function getAnimal(animal) {
  if (animal == "cats") {
    return "I totally love cats!";
  }
  if (animal == `${animal}`) {
    return `I like ${animal}!`;
  }
  if (animal == null) {
    return "I do not like animals at all!";
  }
}
