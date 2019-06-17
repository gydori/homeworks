const korKer = (...params) => {
  if (params.length === 1) {
    let r = params[0];
    return 'A kör kerülete: ' + (2 * r * Math.PI);
  } else {
    if (params.length < 1) {
      return 'Túl kevés paraméter!';
    } else {
      return 'Túl sok paraméter!';
    }
  }
};

const korTer = (...params) => {
  if (params.length === 1) {
    let r = params[0];
    return 'A kör területe: ' + (Math.pow(r, 2) * Math.PI);
  } else {
    if (params.length < 1) {
      return ('Túl kevés paraméter!');
    } else {
      return 'Túl sok paraméter!';
    }
  }
};

const haromszogKer = (...params) => {
  if (params.length === 3) {
    let a = params[0];
    let b = params[1];
    let c = params[2];
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 'Ez nem háromszög';
    } else {
      return 'A háromszög kerülete: ' + (a + b + c);
    }
  } else {
    if (params.length < 3) {
      return ('Túl kevés paraméter!');
    } else {
      return 'Túl sok paraméter!';
    }
  }
};

const haromszogTer = (...params) => {
  if (params.length === 2) {
    let a = params[0];
    let m = params[1];
    return 'A háromszög területe: ' + (m * a / 2);
  } else {
    if (params.length < 2) {
      return ('Túl kevés paraméter!');
    } else {
      return 'Túl sok paraméter!';
    }
  }
};

const negyszogKer = (...params) => {
  if (params.length === 1) {
    let a = params[0];
    return 'A négyzet kerülete: ' + (4 * a);
  } else {
    if (params.length === 2) {
      let a = params[0];
      let b = params[1];
      return 'A téglalap kerülete: ' + (2 * a + 2 * b);
    } else {
      if (params.length < 1) {
        return 'Túl kevés paraméter!';
      } else {
        return 'Túl sok paraméter!';
      }
    }
  }
};

const negyszogTer = (...params) => {
  if (params.length === 1) {
    let a = params[0];
    return 'A négyzet területe: ' + (Math.pow(a, 2));
  } else {
    if (params.length === 2) {
      let a = params[0];
      let b = params[1];
      return 'A téglalap területe: ' + (a * b);
    } else {
      if (params.length < 1) {
        return 'Túl kevés paraméter!';
      } else {
        return 'Túl sok paraméter!';
      }
    }
  }
};

const hasabFel = (...params) => {
  if (params.length === 1) {
    let a = params[0];
    return 'A kocka felülete: ' + (Math.pow(a, 2) * 6);
  } else {
    if (params.length === 2) {
      let a = params[0];
      let b = params[1];
      return 'A hasáb felülete: ' + (Math.pow(a, 2) * 2 + a * b * 4);
    } else {
      if (params.length < 1) {
        return 'Túl kevés paraméter!';
      } else {
        return 'Túl sok paraméter!';
      }
    }
  }
};

const hasabTerf = (...params) => {
  if (params.length === 1) {
    let a = params[0];
    return 'A kocka térfogata: ' + (Math.pow(a, 3));
  } else {
    if (params.length === 2) {
      let a = params[0];
      let b = params[1];
      return 'A hasáb térfogata: ' + (Math.pow(a, 2) * b);
    } else {
      if (params.length < 1) {
        return 'Túl kevés paraméter!';
      } else {
        return 'Túl sok paraméter!';
      }
    }
  }
};

const gombFel = (...params) => {
  if (params.length === 1) {
    let r = params[0];
    return 'A gömb felülete: ' + (4 * Math.PI * Math.pow(r, 2));
  } else {
    if (params.length < 1) {
      return ('Túl kevés paraméter!');
    } else {
      return 'Túl sok paraméter!';
    }
  }
};

const gombTerf = (...params) => {
  if (params.length === 1) {
    let r = params[0];
    return 'A gömb térfogata: ' + (4 * Math.PI * Math.pow(r, 3) / 3);
  } else {
    if (params.length < 1) {
      return ('Túl kevés paraméter!');
    } else {
      return 'Túl sok paraméter!';
    }
  }
};

let calc = (callb, ...params) => {
  return callb(...params);
};

console.log(calc(korKer, 3));
console.log(calc(korTer, 3));
console.log(calc(haromszogKer, 2, 4, 5));
console.log(calc(haromszogTer, 3, 6));
console.log(calc(negyszogKer, 5, 4));
console.log(calc(negyszogTer, 5));
console.log(calc(hasabFel, 2, 6));
console.log(calc(hasabTerf, 2));
console.log(calc(gombFel, 2));
console.log(calc(gombTerf, 2));
