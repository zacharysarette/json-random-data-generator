const fs = require('fs')

module.exports = ({ fileName }) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      return console.error(err)
    }
    return data
  })
}
