#!/usr/bin/env node

const params = require('./arguments')
const fs = require('fs')
const GenerateJsonString = require('./generateJsonString')
const generateObject = require('./generateObject')

const theFields = require('../configs/' + params.c).theFields // needed

console.log('Going to write into existing file')

// This is where the magic happens
const jsonString = new GenerateJsonString()
  .addStrings(`{\n"${params.a}":[\n`)
  .generateAndAddObjects(params.n, theFields, generateObject)
  .addStrings(']\n}\n')

const fileName = './exports/' + params.f

fs.writeFile(fileName, jsonString.jsonString, function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('Data written successfully!')
})
