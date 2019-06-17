const pali = (str) => {
  let strSpace = str.replace(/[ ,.,,,!,?]/g, '').toLowerCase();
  console.log(strSpace);
  let sum = 0;
  for (let i = 0; i < Math.floor(strSpace.length / 2); i++) {
    if (strSpace[i] === strSpace[strSpace.length - 1 - i]) {
      sum++;
    }
  }
  if (sum === Math.floor(strSpace.length / 2)) {
    return true;
  } else {
    return false;
  }
};

console.log(pali('Indul, a görög. aludni?'));
