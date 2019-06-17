
const vizszint = () => {
  // üres tömb generálása
  let arr = new Array(20);
  for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
  }

  // tömb feltöltése 1-3 random számokkal
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3) + 1;
    }
  }

  console.log(arr);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      if (arr[i][j] === 1 && arr[i][j + 1] === 2 && arr[i][j + 2] === 3) {
        sum++;
      }
    }
  }
  return sum;
};

// console.log(vizszint());

const fuggoleges = () => {
  // üres tömb generálása
  let arr = new Array(20);
  for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
  }

  // tömb feltöltése 1-3 random számokkal
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3) + 1;
    }
  }

  console.log(arr);

  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i][j] === 1 && arr[i + 1][j] === 2 && arr[i + 2][j] === 3) {
        sum++;
      }
    }
  }
  return sum;
};

// console.log(fuggoleges());

const sarok = () => {
  // üres tömb generálása
  let arr = new Array(20);
  for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
  }

  // tömb feltöltése 1-3 random számokkal
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3) + 1;
    }
  }

  console.log(arr);

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i][j] === 1 && arr[i][j + 1] === 2 && arr[i + 1][j + 1] === 3) {
        sum++;
      }
    }
  }
  return sum;
};

console.log(sarok());
