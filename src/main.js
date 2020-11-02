#!/usr/bin/env node

const params = require('./arguments')
const fs = require('fs')
const generateObject = require('./generateObject')

const theFields = require('../configs/' + params.c).theFields // needed

console.log('Going to write into existing file')

// d is for data
let d = '{\n'

// $ is for adding to the d
function $ (s = '\n') {
  d += s
}

// This is where the magic happens
$(`"${params.a}":[`)

for (params.n; params.n > 1; params.n--) {
  d = generateObject(theFields, d)
}
d = generateObject(theFields, d, true)

$(']\n}\n')

const fileName = './exports/' + params.f

fs.writeFile(fileName, d, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('Data written successfully!')
})
