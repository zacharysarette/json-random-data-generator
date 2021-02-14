const GenerateJsonString = require('./generateJsonString')

module.exports = function ({
  configString = '',
  configObject = {},
  objectArrayName,
  numberOfObjects
}) {
  const theFields =
    configObject === {}
      ? configString === ''
          ? ''
          : JSON.parse(configString)[objectArrayName]
      : configObject[objectArrayName]

  return GenerateJsonString(objectArrayName, numberOfObjects, theFields)
}
