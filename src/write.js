module.exports = function (fileName, jsonString) {
  const fs = require('fs')
  console.log('Going to write into existing file')
  fs.writeFile(fileName, jsonString, function (err) {
    if (err) {
      return console.error(err)
    }
    console.log(require('chalk').green.inverse(
      'Data written successfully!'))
  })
}
