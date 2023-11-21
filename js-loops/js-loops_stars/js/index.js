console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let counter = 1; counter < 6; counter++) {
    const star = document.createElement("img");
    if (counter <= filledStars) {
      star.setAttribute("src", "./assets/star-filled.svg");
    } else {
      star.setAttribute("src", "./assets/star-empty.svg");
    }
    star.addEventListener("click", () => {
      renderStars(counter);
    });
    starContainer.append(star);
  }
  //--^-- your code here --^--
}

renderStars(3);
