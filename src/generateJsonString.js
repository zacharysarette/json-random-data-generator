module.exports = class GenerateJsonString {
  constructor () {
    this.jsonString = ''
  }

  start (objectArrayName) {
    this.jsonString += `{\n"${objectArrayName}":[\n`
    return this
  }

  generateAndAddObjects (numberOfTimes, fields, generateObject) {
    for (numberOfTimes; numberOfTimes > 1; numberOfTimes--) {
      this.jsonString = generateObject(fields, this.jsonString)
    }
    this.jsonString = generateObject(fields, this.jsonString, true)
    return this
  }

  end () {
    this.jsonString += ']\n}\n'
    return this
  }
}
