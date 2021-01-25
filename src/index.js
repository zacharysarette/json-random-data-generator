class jsonDataGenerator {
  static buildJsonString ({ configFile, objectArrayName, numberOfObjects }) {
    return require('./build')({
      configFile,
      objectArrayName,
      numberOfObjects
    })
  }

  static buildJustonStringAndWriteToFile ({ filename, params }) {
    return require('./write')({ filename, jsonString: this.buildJsonString(params) })
  }
}

export default jsonDataGenerator
