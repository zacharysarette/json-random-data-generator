#!/usr/bin/env node
const params = require('./arguments')
const build = require('./build')
const write = require('./write')

const jsonString = build({
  configFile: params.c,
  objectArrayName: params.a,
  numberOfObjects: params.n
})

write({ fileName: params.f, jsonString })
