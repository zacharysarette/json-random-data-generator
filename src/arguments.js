module.exports = require('yargs')
  .scriptName('json-data-generator')
  .usage('Usage: $0 -a string -f string -n number -c string')
  .example(
    'npm run generate -- -a customerComments -f exampleData.json -n 200 -c exampleConfig.json'
  )
  .option('a', {
    alias: 'arrayName',
    describe: 'the name of the array of objects',
    demandOption: 'Array name is required',
    type: 'string',
    nargs: 1
  })
  .option('n', {
    alias: 'numberOfObjectsToGenerate',
    describe: 'The number of objects to generate in the json array',
    demandOption: 'Number of objects to generate is required',
    type: 'number',
    nargs: 1
  })
  .option('f', {
    alias: 'fileName',
    describe:
      'The file name for the output file to be put in the exports folder',
    demandOption: 'File name is required',
    type: 'string',
    nargs: 1
  })
  .option('c', {
    alias: 'configFile',
    describe: 'The path for the config file that is in the config folder',
    demandOption: 'Config File is required',
    type: 'string',
    nargs: 1
  }).argv
