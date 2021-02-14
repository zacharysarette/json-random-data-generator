const buildConfig = require('./buildConfig')
const build = require('./build')

module.exports = {
  configObject: buildConfig,
  buildJsonStringFromConfigString: ({
    configString = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) =>
    build({
      configString,
      objectArrayName,
      numberOfObjects
    }),
  buildJsonStringFromConfigObject: ({
    configObject,
    objectArrayName = Object.keys(configObject)[0],
    numberOfObjects
  }) =>
    build({
      configObject,
      objectArrayName,
      numberOfObjects
    })
}
