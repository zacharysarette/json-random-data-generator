module.exports = ({ data, values = [] }) => {
  const get = require('./getValue')
  for (let i = data.length - 1; i > -1; i--) {
    values.unshift(
      get({ valueType: data[i].type, value: data[i].values })
    )
  }
  return values
}
