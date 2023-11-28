console.clear();

const array = [
  5, 3, 5, 6, 8, 9, 3, 56, 2, 54, 6, 43, 7, 8, 13, 45, 16, 61, 34, 11, 9, 4,
];
const target = 16;

function twoSum(array, target) {
  // for (let i = 0; i <array.length -1; i++) {
  //   for (let j = i + 1; j <array.length; j++) {
  //     if (console.log() )
  //   }
  // }

  const arrayToObject = {};
  array.forEach((element, i) => {
    arrayToObject[element] = i;

    console.log(arrayToObject);
  });

  for (let i = 0; i < array.length - 1; i++) {
    const difference = target - array[i];
    console.log(difference);
    if (arrayToObject[difference] !== undefined) {
      return [i, arrayToObject[difference]];
    }
    // });

    // `Element: ${element}`
  }
}

console.log(twoSum(array, target));

//original for loop:
// for (let i = 1; i < 101; i++) {
//   console.log(i);

// }
