function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

//shifts 5
function caesarCipher(str) {
  str = str.toLowerCase().split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '' || str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
      continue;
    } else {
      let strCharCode = str[i].charCodeAt();
      strCharCode += 5;
      if (strCharCode > 122) {
        strCharCode -= 26;
      }
      str[i] = String.fromCharCode(strCharCode);
    }
  }
  str = str.join('');
  return str;
}

function analyzeArray(arr) {
  const obj = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return obj;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
