module.exports = class GenerateJsonString {
  constructor () {
    this.jsonString = ''
  }

  addStrings (strings) {
    this.jsonString += strings
    return this
  }

  generateAndAddObjects (numberOfTimes, fields, generateObject) {
    for (numberOfTimes; numberOfTimes > 1; numberOfTimes--) {
      this.jsonString = generateObject(fields, this.jsonString)
    }
    this.jsonString = generateObject(fields, this.jsonString, true)
    return this
  }
}
