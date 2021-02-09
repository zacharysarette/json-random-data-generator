module.exports = class jsonDataGenerator {
  static buildJsonStringFromConfigFile ({
    configFile = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) {
    return require('./build')({
      configFile,
      objectArrayName,
      numberOfObjects
    })
  }

  static buildJsonStringFromConfigFileAndWriteToFile ({
    filename = '',
    configFile = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) {
    return require('./write')({
      filename,
      jsonString: this.buildJsonStringFromConfigFile({
        configFile,
        objectArrayName,
        numberOfObjects
      })
    })
  }

  static buildJsonStringFromConfigString ({
    configString = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) {
    return require('./build')({
      configString,
      objectArrayName,
      numberOfObjects
    })
  }

  static buildJsonStringFromConfigStringAndWriteToFile ({
    filename = '',
    configString = '',
    objectArrayName = '',
    numberOfObjects = 0
  }) {
    return require('./write')({
      filename,
      jsonString: this.buildJsonStringFromConfigString({
        configString,
        objectArrayName,
        numberOfObjects
      })
    })
  }

  static configObject () {
    return require('./buildConfig')
  }

  static buildJsonStringFromConfigObject ({ configObject, numberOfObjects }) {
    return require('./build')({
      configObject,
      objectArrayName: Object.keys(configObject)[0] ?? '',
      numberOfObjects
    })
  }

  static buildJsonStringFromConfigObjectAndWriteToFile ({
    filename = '',
    configObject = { objectArrayName: [] },
    objectArrayName = '',
    numberOfObjects = 0
  }) {
    return require('./write')({
      filename,
      jsonString: this.buildJsonStringFromConfigObject({
        configObject,
        objectArrayName,
        numberOfObjects
      })
    })
  }
}
