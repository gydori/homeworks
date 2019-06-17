const table = require('table');

console.log(table.table([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));

let current;
let current2;

let texturalNumber0 = 'ez a nullás mező';
let texturalNumber2 = 'ez a kettes mező';
let texturalNumber4 = 'ez a négyes mező';
let texturalNumber6 = 'ez a hatos mező';
let texturalNumber8 = 'ez a nyolcas mező';
let texturalNumberX = 'X';

const walk = (step01, step02) => {
  switch (step01) {
    case 'up':
      current = 1;
      break;
    case 'right':
      current = 5;
      break;
    case 'down':
      current = 7;
      break;
    case 'left':
      current = 3;
      break;
    default:
      current = 'X';
  }

  switch (current) {
    case 1:
    {
      switch (step02) {
        case 'up':
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
          break;
        case 'right':
          current2 = 2;
          console.log(texturalNumber2, '\n', current2);
          break;
        case 'down':
          current2 = 4;
          console.log(texturalNumber4, '\n', current2);
          break;
        case 'left':
          current2 = 0;
          console.log(texturalNumber0, '\n', current2);
          break;
        default:
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
      }
      break;
    }
    case 5:
    {
      switch (step02) {
        case 'up':
          current2 = 2;
          console.log(texturalNumber2, '\n', current2);
          break;
        case 'right':
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
          break;
        case 'down':
          current2 = 8;
          console.log(texturalNumber8, '\n', current2);
          break;
        case 'left':
          current2 = 4;
          console.log(texturalNumber4, '\n', current2);
          break;
        default:
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
      }
      break;
    }
    case 7:
    {
      switch (step02) {
        case 'up':
          current2 = 4;
          console.log(texturalNumber4, '\n', current2);
          break;
        case 'right':
          current2 = 8;
          console.log(texturalNumber8, '\n', current2);
          break;
        case 'down':
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
          break;
        case 'left':
          current2 = 6;
          console.log(texturalNumber6, '\n', current2);
          break;
        default:
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
      }
      break;
    }
    case 3:
    {
      switch (step02) {
        case 'up':
          current2 = 0;
          console.log(texturalNumber0, '\n', current2);
          break;
        case 'right':
          current2 = 4;
          console.log(texturalNumber4, '\n', current2);
          break;
        case 'down':
          current2 = 6;
          console.log(texturalNumber6, '\n', current2);
          break;
        case 'left':
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
          break;
        default:
          current2 = 'X';
          console.log(texturalNumberX, '\n', current2);
      }
      break;
    }
    default:
      current2 = 'X';
      console.log(texturalNumberX, '\n', current2);
  }

  return current2;
};

walk('right', 'down');
