module.exports = function (valueType) {
  const utils = require('./utils')
  return {
    date: function (element) {
      return utils.wrapStringInQuotes(utils.getRandomDate(element))
    },
    arr: function (element) {
      return utils.checkAndWrap(utils.getRandFromArray(element))
    },
    val: function (element) {
      return utils.checkAndWrap(element[0])
    },
    num: function (element) {
      return utils.rand(element[0], element[1])
    },
    numSigned: function (element) {
      return this.num(element) * utils.getRandomSign()
    }
  }[valueType]
}
