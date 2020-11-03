module.exports = function (data, values = []) {
  const getValue = require('./getValue')
  for (let i = data.length - 1; i > -1; i--) {
    values.unshift(getValue(data[i].type)(data[i].values))
  }
  return values
}
