const mockValues = require('./mockValues')
const get = require('../src/getValues')

test('should return a string', () => {
  expect(get({ data: mockValues })).not.toBeNull()
})
