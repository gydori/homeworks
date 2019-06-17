let tomb1 = [1, 2, 5, 5, 11, 13];
let tomb2 = [1, 2, 5, 1, 4, 1];

const diffOszt = (tomb1, tomb2) => {
  let min = Infinity;
  for (let i = 0; i < tomb1.length; i++) {
    if (tomb1[i] % 2 === 0 && tomb1[i] < min) {
      min = tomb1[i];
    }
  }
  if (min === Infinity) {
    return 'Nincs kettővel osztható szám tomb1-ben.';
  } else {
    let max = Infinity * (-1);
    for (let i = 0; i < tomb2.length; i++) {
      if (tomb2[i] > max && tomb2[i] % 3 === 0) {
        max = tomb2[i];
      }
    }
    if (max === Infinity * (-1)) {
      return 'Nincs hárommal osztható szám tomb2-ben.';
    } else {
      return Math.abs(max - min);
    }
  }
};

console.log(diffOszt(tomb1, tomb2));
