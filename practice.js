const calculator = {
  name: "sexy calculator",
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(4, 2);
calculator.minus(4, 2);
calculator.divide(4, 2);
calculator.powerof(4, 2);
