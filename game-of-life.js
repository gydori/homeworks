let sor;
let oszlop;

const generate2D = (n, m) => {
  sor = n;
  oszlop = m;
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
let arr = generate2D(3, 4);

const fill2D = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
};

fill2D(arr);

const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

const addCell = (arr, str) => {
  let strSplit = str.split(' ');
  let x = strSplit[0];
  let y = strSplit[1];
  if (x >= 0 && x < sor && y >= 0 && y < oszlop) {
    arr[x][y] = 1;
  } else {
    console.log('A megadott koordináta nincs a tartományon belül');
  }
};

addCell(arr, '2 1');
print2d(arr);

const getNeighbors = (arr, x, y) => {
  let count = 0;
  let neighbors = [[x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]];
  for (let i = 0; i < neighbors.length; i++) {
    let xNeigh = neighbors[i][0];
    let yNeigh = neighbors[i][1];
    if (xNeigh >= 0 && xNeigh < sor && yNeigh >= 0 && yNeigh < oszlop && arr[xNeigh][yNeigh] === 1) {
      count++;
    }
  }
  return count;
};

getNeighbors(arr, 0, 3);

const iterate = (arr) => {
  let arrNew = generate2D(sor, oszlop);
  fill2D(arrNew);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let neigh = getNeighbors(arr, i, j);
      if (arr[i][j] === 1 && neigh === 3) {
        arrNew[i][j] = 1;
      }
      if (arr[i][j] === 1 && (neigh < 3 || neigh > 3)) {
        arrNew[i][j] = 0;
      }
      if (arr[i][j] === 0 && neigh === 3) {
        arrNew[i][j] = 1;
      }
    }
  }
  return arrNew;
};

console.log(iterate(arr));
