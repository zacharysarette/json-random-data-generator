const GenerateJsonString = require('./generateJsonString')
const generateObject = require('./generateObject')

module.exports = function ({
  configString = '',
  configFile = '',
  configObject = {},
  objectArrayName,
  numberOfObjects
}) {
  const theFields =
    configObject === {}
      ? configFile === ''
          ? configString === ''
              ? ''
              : JSON.parse(configString)[objectArrayName]
          : require(configFile)[objectArrayName]
      : configObject[objectArrayName]

  return new GenerateJsonString()
    .start({ objectArrayName })
    .generateAndAddObjects({
      numberOfObjects,
      fields: theFields,
      generateObject
    })
    .end()
}
