const GenerateJsonString = require('./generateJsonString')
const readConfig = require('./read')

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
          : readConfig(configFile)[objectArrayName]
      : configObject[objectArrayName]

  return new GenerateJsonString()
    .start({ objectArrayName })
    .generateAndAddObjects({
      numberOfObjects,
      fields: theFields
    })
    .end()
}
