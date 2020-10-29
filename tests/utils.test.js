const utils = require('../src/utils')

test('should return wrapped quote', () => {
  expect(utils.wrapStringInQuotes('text')).toBe('"text"')
})

test('should return number between 1 and 2', () => {
  const randNum = utils.rand(1, 2)
  expect(randNum).toBeGreaterThanOrEqual(1)
  expect(randNum).toBeLessThanOrEqual(2)
})

test('should be random from an array', () => {
  const testArray = [1, 2, 3, 4]
  const randomElement = utils.getRandFromArray(testArray)
  expect(testArray).toContain(randomElement)
})
test('should run x times', () => {
  let j = 0
  const addJ = () => { j += 1 }
  utils.doXTimes(addJ, 3)
  expect(j).toBe(3)
})
test('should add to 2 and 2 to 4', () => {
  expect(utils.sum(2, 2)).toBe(4)
})
