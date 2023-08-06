export default (function () {
  function calculator() {
    this.add = function (a, b) {
      return a + b;
    };
    this.multiply = function (a, b) {
      return a * b;
    };
  }
  return new calculator();
})();
