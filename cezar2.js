const cezar = (str, int) => {
  int = int % 26;

  let strToCharCode = []; // str átalakítása ASCII kóddá
  for (let i = 0; i < str.length; i++) {
    strToCharCode.push(str.charCodeAt(i));
  }

  let strCezarCharCode = []; // int-tel való eltolás az ASCII táblán
  for (let i = 0; i < strToCharCode.length; i++) {
    if (strToCharCode[i] >= 65 && strToCharCode[i] <= 90) { // Nagybetűk
      if (strToCharCode[i] + int > 90) {
        strCezarCharCode.push(strToCharCode[i] + int - 90 + 64);
      } else {
        strCezarCharCode.push(strToCharCode[i] + int);
      }
    } else { // Kisbetűk
      if (strToCharCode[i] + int > 122) {
        strCezarCharCode.push(strToCharCode[i] + int - 122 + 96);
      } else {
        strCezarCharCode.push(strToCharCode[i] + int);
      }
    }
  }

  let strCezar = []; // Visszaalakítás kódból stringgé
  for (let i = 0; i < strCezarCharCode.length; i++) {
    strCezar.push(String.fromCharCode(strCezarCharCode[i]));
  }

  return strCezar.join('');
};

console.log(cezar('IoELlzZ', 28));
