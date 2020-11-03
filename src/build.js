module.exports = function (configFile, objectArrayName, numberOfObjects) {
  const GenerateJsonString = require('./generateJsonString')
  const generateObject = require('./generateObject')
  const theFields = require('../configs/' + configFile).theFields // needed

  const jsonString = new GenerateJsonString()

  jsonString
    .start(objectArrayName)
    .generateAndAddObjects(numberOfObjects, theFields, generateObject)
    .end()

  return jsonString.jsonString
}
