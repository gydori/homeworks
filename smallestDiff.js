let arr1 = [2, 5, 3, 4, 1];
let arr2 = [7, 7, 8, 9, 10];

const smallestDiff = (arr1, arr2) => {
  let min = Math.abs(arr1[0] - arr2[0]);
  let minTomb = [];
  minTomb[0] = arr1[0];
  minTomb[1] = arr2[0];
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
