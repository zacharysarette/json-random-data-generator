const fs = require('fs')

module.exports = ({ fileName }) => {
  console.log('Going to read file')
  fs.readFile(fileName, (err, data) => {
    if (err) {
      return console.error(err)
    }
    console.log(
      require('chalk').green.inverse('file read successfully!')
    )
    return data
  })
}
