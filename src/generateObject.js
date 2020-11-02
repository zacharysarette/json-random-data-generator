const getTheValues = require('./theValues') // needed

module.exports = function (fields, blarb, last = false
) {
  const values = getTheValues(fields)
  if (values.length !== fields.length) throw new Error('Unexpected Length for values and fields')
  blarb += '{'
  for (let i = fields.length - 1; i > -1; i--) {
    blarb += `\n"${fields[i].name}": ${values[i]}`
    if (i !== 0) blarb += ','
  }
  blarb += last ? '\n}' : '\n},'
  return blarb
}
