console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//create Elements

const newPost = document.createElement("section");
const p = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const newLikeButton = document.createElement("button");

//add element properties

newPost.classList.add("post");
p.classList.add("post__content");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit!";
footer.classList.add("post__footer");
span.classList.add("post__username");
span.textContent = "@Username2";
newLikeButton.setAttribute("type", "button");
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute("data-js", "like-button");
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", handleLikeButtonClick);

//append elements

document.body.append(newPost);
newPost.append(p);
newPost.append(footer);
footer.append(span);
footer.append(newLikeButton);
