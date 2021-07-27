const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },

  minus: function (a, b) {
    return a - b;
  },

  times: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },

  power: function (a, b) {
    return a ** b;
  },
};

const valuePlus = calculator.plus(2, 3);
const valueMinus = calculator.minus(valuePlus, 4);
const valueTimes = calculator.times(valuePlus, valueMinus);

console.log(valueMinus);
