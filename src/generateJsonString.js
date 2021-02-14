const generateObject = require('./generateObject')
module.exports = (objectArrayName, numberOfObjects, fields, jsonString = '') => {
  jsonString += `{\n"${objectArrayName}":[\n`
  for (numberOfObjects; numberOfObjects > 1; numberOfObjects--) {
    jsonString = generateObject({ fields, objectString: jsonString })
  }
  jsonString = generateObject({ fields, objectString: jsonString, last: true })
  jsonString += ']\n}\n'
  return jsonString
}
