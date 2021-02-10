module.exports = class GenerateJsonString {
  constructor () {
    this.jsonString = ''
  }

  start ({ objectArrayName }) {
    this.jsonString += `{\n"${objectArrayName}":[\n`
    return this
  }

  generateAndAddObjects ({ numberOfObjects, fields, generateObject }) {
    for (numberOfObjects; numberOfObjects > 1; numberOfObjects--) {
      this.jsonString = generateObject({ fields, objectString: this.jsonString })
    }
    this.jsonString = generateObject({ fields, objectString: this.jsonString, last: true })
    return this
  }

  end () {
    this.jsonString += ']\n}\n'
    return this.jsonString
  }
}
