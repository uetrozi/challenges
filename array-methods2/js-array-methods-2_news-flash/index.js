import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((properties) => {
  return properties.categories.includes("politics");
});

// Part 2 - start here
const sortedNews = filteredNews.slice().sort((a, b) => {
  const lengthA = a.body.length;
  const lengthB = b.body.length;

  if (lengthA < lengthB) {
    return -1;
  }
  if (lengthA > lengthB) {
    return 1;
  }
  return 0;
});

console.log(sortedNews);

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
