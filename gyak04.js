let tomb = [2, 10, 7, 9, 5, 3, 6, 8, 1, 4];

const sorba = (tomb) => {
  let sizeTomb = tomb.length;
  let sorTomb = [];
  let k = 0;
  for (let i = 0; i < sizeTomb; i++) {
    let max = tomb[0];
    let index = 0;
    for (let i = 0; i < tomb.length; i++) {
      if (tomb[i] > max) {
        max = tomb[i];
        index = i;
      }
    }
    sorTomb[k] = max;
    tomb.splice(index, 1);
    k++;
  }
  console.log(sorTomb);
  return sorTomb[Math.round(sizeTomb * 0.2)];
};

console.log(sorba(tomb));
