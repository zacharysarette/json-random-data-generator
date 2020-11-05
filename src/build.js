module.exports = function (configFile, objectArrayName, numberOfObjects) {
  const GenerateJsonString = require('./generateJsonString')
  const generateObject = require('./generateObject')
  const theFields = require('../configs/' + configFile).theFields

  return new GenerateJsonString()
    .start(objectArrayName)
    .generateAndAddObjects(numberOfObjects, theFields, generateObject)
    .end().jsonString
}
