const utils = require('./utils')

const processType = {
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
}

module.exports = function (data, values = []) {
  for (let i = data.length - 1; i > -1; i--) {
    values.unshift(processType[data[i].type](data[i].values))
  }
  return values
}
