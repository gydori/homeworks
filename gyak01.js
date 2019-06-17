let tomb1 = [9, 8, 7, 6];
let tomb2 = [1, 2, 3, 4];

const diff = (tomb1, tomb2) => {
  let min = tomb1[0];
  for (let i = 0; i < tomb1.length; i++) {
    if (tomb1[i] < min) {
      min = tomb1[i];
    }
  }

  let max = tomb2[0];
  for (let i = 0; i < tomb2.length; i++) {
    if (tomb2[i] > max) {
      max = tomb2[i];
    }
  }

  return Math.abs(max - min);
};

console.log(diff(tomb1, tomb2));
