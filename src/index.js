module.exports = class jsonDataGenerator {
  static buildJsonString ({ configFile, objectArrayName, numberOfObjects }) {
    return require('./build')({
      configFile,
      objectArrayName,
      numberOfObjects
    })
  }

  static buildJsonStringAndWriteToFile ({ filename, params }) {
    return require('./write')({ filename, jsonString: this.buildJsonString(params) })
  }
}
