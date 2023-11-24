const string = "Hello whats your number jhsdkjfhgdshgfhjsdgfhjg";

function countCharacters(string) {
  const counts = {};
  for (const characters of string) {
    counts[characters] = (counts[characters] || 0) + 1;
  }
  return counts;
}

countCharacters(string);
console.log(countCharacters(string));
