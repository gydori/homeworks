const cezar = (str, int) => {
  let alphabet = [];
  let k = 0;
  for (let i = 65; i < 91; i++) {
    alphabet[k] = String.fromCharCode(i).toLowerCase();
    k++;
  }
  alphabet = alphabet.concat(alphabet);

  // console.log(alphabet);

  let cezar = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length / 2; j++) {
      if (str[i] === alphabet[j]) {
        cezar[i] = alphabet[j + int];
      }
    }
  }
  return cezar.join('');
};

console.log(cezar('abz', 3));
