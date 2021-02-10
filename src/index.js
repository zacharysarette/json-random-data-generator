const buildConfig = require('./buildConfig')
const build = require('./build')
const write = require('./write')

module.exports = {
  buildJsonStringFromConfigFile: ({
    configFile = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) =>
    build({
      configFile,
      objectArrayName,
      numberOfObjects
    }),
  buildJsonStringFromConfigFileAndWriteToFile: ({
    filename = '',
    configFile = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) =>
    write({
      filename,
      jsonString: this.buildJsonStringFromConfigFile({
        configFile,
        objectArrayName,
        numberOfObjects
      })
    }),
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
  buildJsonStringFromConfigStringAndWriteToFile: ({
    filename = '',
    configString = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) =>
    write({
      filename,
      jsonString: this.buildJsonStringFromConfigString({
        configString,
        objectArrayName,
        numberOfObjects
      })
    }),
  configObject: buildConfig,
  buildJsonStringFromConfigObject: ({
    configObject,
    objectArrayName = Object.keys(configObject)[0],
    numberOfObjects
  }) =>
    build({
      configObject,
      objectArrayName,
      numberOfObjects
    }),
  buildJsonStringFromConfigObjectAndWriteToFile: ({
    filename = '',
    configObject = { objectArrayName: [] },
    objectArrayName = '',
    numberOfObjects = 0
  }) =>
    write({
      filename,
      jsonString: this.buildJsonStringFromConfigObject({
        configObject,
        objectArrayName,
        numberOfObjects
      })
    })
}
