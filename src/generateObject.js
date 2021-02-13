const getValues = require('./getValues')

module.exports = ({ fields, objectString, last = false }) => {
  if (!fields) throw Error('No fields found')
  const values = getValues({ data: fields })
  if (!values) throw Error('No field data found')
  if (values.length !== fields.length) throw new Error('Unexpected length for values and fields')
  objectString += '{'
  for (let i = fields.length - 1; i > -1; i--) {
    objectString += `\n"${fields[i].name}": ${values[i]}`
    if (i !== 0) objectString += ','
  }
  objectString += last ? '\n}' : '\n},'
  return objectString
}
