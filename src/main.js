#!/usr/bin/env node
const params = require('./arguments')
const build = require('./build')
const write = require('./write')

const jsonString = build({
  configFile: params.c,
  objArrayName: params.a,
  numberOfObjects: params.n
})
const fileName = './exports/' + params.f

write({ fileName, jsonString })
