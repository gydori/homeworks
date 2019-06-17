
const IncrLeft = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    console.log(newArray);
  }
};

const DecrLeft = (array) => {
  let newArray = array;
  do {
    console.log(newArray);
    newArray.pop();
  } while (newArray.length > 0);
};

const DecrRight = (array) => {
  let hossz = array.length;
  let newArray = array;
  let s = ' ';
  let space = '';
  for (let i = 0; i < hossz - 1; i++) {
    console.log(space + '[' + newArray.join(', ') + ']');
    space = space + s.repeat(3 + Math.floor(Math.log10(newArray[0])));
    newArray.shift();
  }
  console.log(space + '[' + newArray.join(', ') + ']');
};

const IncrRight = (array) => {
  let newArray = [];
  let s = ' ';
  let space = '';
  for (let i = 0; i < array.length; i++) {
    space = space + s.repeat(3 + Math.floor(Math.log10(array[i])));
  }
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.unshift(array[i]);
    space = space.substring(0, space.length - (3 + Math.floor(Math.log10(array[i]))));
    console.log(space + '[' + newArray.join(', ') + ']');
  }
};

let draw = (array, callback) => {
  return callback(array);
};

draw([1, 2, 3, 7, 3, 9], IncrLeft);
draw([1, 2, 3, 4, 5], DecrLeft);
draw([1, 32, 4, 17, 4, 8, 143, 2], DecrRight);
draw([1, 2, 3, 152, 43, 19, 113, 1], IncrRight);
