module.exports = {
  wrapStringInQuotes: function (text) {
    return '"' + text + '"';
  },
  rand: function (bottom, top) {
    return Math.floor(Math.random() * top + bottom);
  },
  getRandFromArray: function (arr) {
    return arr[this.rand(0, arr.length - 1)];
  },
  doXTimes: function (n = 0, func, params, callBetween) {
    for (n; n > 0; n--) {
      func(...params);
      if (n !== 1) callBetween();
    }
  },
  getRandomDate: function (years) {
    return this.printRandDate(this.getRandFromArray(years), this.rand(1, 12));
  },
  printRandDate: function (year, month) {
    return `${year}-${month}-${this.rand(1, this.getMonthEnd(month, year))}`;
  },
  getMonthEnd: function (month, year) {
    if (month < 0 || month > 12) return;
    if (month === 2)
      return year % 100 === 0
        ? year % 400 === 0
          ? 29
          : 28
        : year % 4 === 0
        ? 29
        : 28;
    return this.arrayContains([4, 6, 9, 11], month) ? 31 : 30;
  },
  arrayContains: function (arr, toCheck) {
    return (
      arr.findIndex(function (element) {
        return element === toCheck;
      }) !== -1
    );
  },
  getRandomSign: function () {
    return this.getRandFromArray([1, -1, 0]);
  },
};
