module.exports = class jsonDataGenerator {
  static buildJsonString ({ configFile = '', objectArrayName = '', numberOfObjects = 0 }) {
    return require('./build')({
      configFile,
      objectArrayName,
      numberOfObjects
    })
  }

  static buildJsonStringAndWriteToFile ({ filename = '', params }) {
    return require('./write')({ filename, jsonString: this.buildJsonString(params) })
  }
}
