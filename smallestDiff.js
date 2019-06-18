let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

const smallestDiff = (arr1, arr2) => {
  let min = Math.abs(arr1[0] - arr2[0]);
  let minTomb = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < min) {
        min = Math.abs(arr1[i] - arr2[j]);
        minTomb[0] = arr1[i];
        minTomb[1] = arr2[j];
      }
    }
  }
  return minTomb;
};

console.log(smallestDiff(arr1, arr2));
