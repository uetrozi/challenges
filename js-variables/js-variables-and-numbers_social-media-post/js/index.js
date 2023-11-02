console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Look at this!";
const text = "lorem ipsum dolores bla bla bla";
let numberOfLikes = 78;
const createdByUsername = "Chimamanda Ngozi Adichie";
const isReported = true;

const socialMediaPost = [
  title,
  text,
  numberOfLikes,
  createdByUsername,
  isReported,
];

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("socialMediaPost", socialMediaPost);
console.log("numberOfLikes", numberOfLikes + 1);
// --^-- write your code here --^--
