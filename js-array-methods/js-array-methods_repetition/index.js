const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((content) => {
  return content.title;
}); // ['Crepes', ...]

const titlesWithDuration = recipes.map((content) => {
  return `${content.title} (${content.duration}min)`;
}); // ['Crepes (60min)', ...]

const timePerServing = recipes.map((content) => {
  return content.duration / content.servings;
}); // [20, 10, 432, 12]

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = recipes
  .map((content) => {
    return content.title;
  })
  .join(", ");
// 'Crepes, Scrambled Eggs, ...';

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((content) => {
  return content.duration <= 60;
});

const allRecipesWithMoreThan2Servings = recipes.filter((content) => {
  return content.servings > 2;
});

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((content) => {
  return content.title.length > 12;
});

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
