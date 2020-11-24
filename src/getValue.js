module.exports = ({ valueType, value }) => {
  const utils = require('./utils')
  return {
    date: (e) => utils.wrapStringInQuotes({ text: utils.getRandomDate(e) }),
    arr: (e) => utils.checkAndWrap({ element: utils.getRandFromArray({ arr: e }) }),
    val: (e) => utils.checkAndWrap({ element: e[0] }),
    num: (e) => utils.rand({ bottom: e[0], top: e[1] }),
    numFloat: (e) => utils.randFloat({ bottom: e[0], top: e[1] }),
    numSigned: (e) => utils.rand({ bottom: e[0], top: e[1] }) * utils.getRandomSign()
  }[valueType](value)
}
