let tomb1 = [1, 2, 5, -6, 11, 13];
let tomb2 = [1, -3, 5, 1, 4, 1];

const diffOszt = (tomb1, tomb2) => {
  let min;
  for (let i = 0; i < tomb1.length; i++) {
    if (tomb1[i] % 2 === 0) {
      min = tomb1[i];
    }
  }
  if (min == null) {
    return 'Nincs kettővel osztható szám tomb1-ben';
  } else {
    for (let i = 0; i < tomb1.length; i++) {
      if (tomb1[i] < min && tomb1[i] % 2 === 0) {
        min = tomb1[i];
      }
    }

    let max;
    for (let i = 0; i < tomb2.length; i++) {
      if (tomb2[i] % 3 === 0) {
        max = tomb2[i];
      }
    }
    if (max == null) {
      return 'Nincs hárommal osztható szám tomb2-ben.';
    } else {
      for (let i = 0; i < tomb2.length; i++) {
        if (tomb2[i] > max && tomb2[i] % 3 === 0) {
          max = tomb2[i];
        }
      }
    }
    return Math.abs(max - min);
  }
};

console.log(diffOszt(tomb1, tomb2));
