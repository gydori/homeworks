const e = '3x^2-15x+33=9';

const masodfok = (e) => {
// '-'-ok kicserélése '+-'-ra, és a '='-t '+=-re, hogy b és c1 mindig a tömb ugyanannyiadik eleme legyen (c2 mindig a legutolsó elem)
  let eNegA;
  if (e[0] === '-') {
    eNegA = '-' + e.slice(1, e.length).replace(/-/g, '+-').replace('=', '+=');
  } else {
    eNegA = e.replace(/-/g, '+-').replace('=', '+=');
  }

  // x^2 kicserélése y-ra, hogy ne vágja szét a 2-eseknél
  let eRep = eNegA.replace('x^2', 'y');

  // Az egyenlet szétdarabolása, hogy ki lehessen szedni az együtthatókat
  let eSplit = eRep.split(/[y, x, +, -, =]/);

  // a
  let a;
  if (eSplit[0] === '') {
    a = 1;
  } else {
    if (eSplit[0] === '-') {
      a = -1;
    } else {
      a = Number(eSplit[0]);
    }
  }

  // b
  let b;
  if (eSplit[2] === '') {
    b = 1;
  } else {
    if (eSplit[2] === '-') {
      b = -1;
    } else {
      b = Number(eSplit[2]);
    }
  }

  // c
  let c1;
  if (eSplit[4] === '') {
    c1 = 0;
  } else {
    c1 = Number(eSplit[4]);
  }
  let c2 = eSplit[eSplit.length - 1];
  let c;
  c = c1 - c2;

  if ((Math.pow(b, 2) - 4 * a * c) < 0) {
    return ('nincs megoldás');
  } else {
    if ((Math.sqrt(Math.pow(b, 2) - 4 * a * c)) === 0) {
      let x1 = (0 - b) / (2 * a);
      return (x1);
    } else {
      let x1 = (0 - b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      let x2 = (0 - b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      let result = [x1, x2];
      return result;
    }
  }
};

console.log(masodfok(e));
