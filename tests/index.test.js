test('should return a something', () => {
  expect(() => require('../src/index').buildJsonString({ configFile: 'exampleConfig.json', objectArrayName: 'ted', numberOfObjects: 0 })).not.toBeNull()
})
