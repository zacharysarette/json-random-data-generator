module.exports = ({
  configString = '',
  configFile = '',
  objectArrayName,
  numberOfObjects
}) => {
  const GenerateJsonString = require('./generateJsonString')
  const generateObject = require('./generateObject')
  const theFields =
    configFile === ''
      ? configString === ''
          ? ''
          : JSON.parse(configString)[objectArrayName]
      : require(configFile)[objectArrayName]

  if (theFields === '') {
    throw new Error('No configFile nor configString found.')
  }
  return new GenerateJsonString()
    .start({ objectArrayName })
    .generateAndAddObjects({
      numberOfObjects,
      fields: theFields,
      generateObject
    })
    .end().jsonString
}
