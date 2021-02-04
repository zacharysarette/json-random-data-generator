module.exports = class jsonDataGenerator {
  static buildJsonStringFromConfigFile ({ configFile = '', objectArrayName = '', numberOfObjects = 0 }) {
    return require('./build')({
      configFile,
      objectArrayName,
      numberOfObjects
    })
  }

  static buildJsonStringAndWriteToFile ({ filename = '', params }) {
    return require('./write')({ filename, jsonString: this.buildJsonString(params) })
  }

  static buildJsonStringFromConfigString ({ configString = '', objectArrayName = '', numberOfObjects = 0 }) {
    return require('./build')({
      configString,
      objectArrayName,
      numberOfObjects
    })
  }
}
