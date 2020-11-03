module.exports = {
  wrapStringInQuotes: function (text) {
    return '"' + text + '"'
  },
  checkAndWrap: function (element) {
    return typeof element === 'string' ? this.wrapStringInQuotes(element) : element
  },
  rand: function (bottom, top, addFactor = 0, randFactor = Math.random()) {
    if (bottom === 0) addFactor = 1
    return (
      Math.floor(randFactor * (top + addFactor) + (bottom + addFactor)) -
      addFactor
    )
  },
  getRandFromArray: function (arr) {
    return arr[this.rand(0, arr.length - 1)]
  },
  sum: function (a, b) {
    return a + b
  },
  getRandomDate: function (years, randomMonth = this.rand(1, 12), day = undefined) {
    return this.printRandDate(this.getRandFromArray(years), randomMonth, day)
  },
  printRandDate: function (year, month, day = this.rand(1, this.getMonthEnd(month, year))) {
    return `${year}-${month}-${day}`
  },
  getMonthEnd: function (month, year) {
    if (month < 1 || month > 12) throw new Error('Invalid month, expected 1 - 12.')
    if (month === 2) {
      return year % 100 === 0
        ? year % 400 === 0
            ? 29
            : 28
        : year % 4 === 0
          ? 29
          : 28
    }
    return [4, 6, 9, 11].includes(month) ? 30 : 31
  },
  getRandomSign: function () {
    return this.getRandFromArray([1, -1, 0])
  },
  getSequenceEnd: function (additor, nTimes, base = 0) {
    if (nTimes > 0) {
      return this.getSequenceEnd(additor, nTimes - 1, base + additor)
    }
    return base
  }
}
