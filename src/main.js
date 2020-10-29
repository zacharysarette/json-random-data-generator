#!/usr/bin/env node

const params = require('./arguments')
const fs = require('fs')
const utils = require('./utils')

const theFields = require('../configs/' + params.c).theFields // needed
const getTheValues = require('./theValues') // needed

console.log('Going to write into existing file')

// d is for data
let d = '{\n'

// $ is for adding to the d
function $ (s = '\n') {
  d += s
}

const generateobject = function (fields) {
  const values = getTheValues(fields)
  if (values.length !== fields.length) return
  $('{')
  for (let i = fields.length - 1; i > -1; i--) {
    $('\n"')
    $(fields[i].name)
    $('":')
    $(
      typeof values[i] === 'string'
        ? utils.wrapStringInQuotes(values[i])
        : values[i]
    )
    if (i !== 0) $(',')
  }
  $('\n}')
}

// This is where the magic happens
$(`"${params.a}":[`)
utils.doXTimes(params.n, generateobject, [theFields], function () {
  $(',\n')
})
$(']\n}\n')

const fileName = './exports/' + params.f

fs.writeFile(fileName, d, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('Data written successfully!')
})
