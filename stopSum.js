let arr = [1, 2, 3, 4];
const stepSum = (arr) => {
  let p = [];
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      p[i] = arr[i] + arr[i + 1];
    }
    stepSum(p);
  }
  console.log(arr);
};
stepSum(arr);
