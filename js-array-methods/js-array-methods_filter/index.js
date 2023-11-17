console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((CardContent) => {
  return CardContent.id == "2";
});

const allCardsWith3Tags = cards.filter((CardContent) => {
  return CardContent.tags.length === 3;
});

const allCardsThatAreNotBookmarked = cards.filter((CardContent) => {
  return !CardContent.isBookmarked;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (CardContent) => {
    return (
      CardContent.tags.includes("js") ||
      (CardContent.tags.includes("html") && CardContent.isBookmarked == true)
    );
  }
);

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
