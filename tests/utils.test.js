const utils = require('../src/utils')

test('should return number', () => {
  expect(utils.checkAndWrap({ element: 0 })).toBe(0)
})

test('should return wrapped quote', () => {
  expect(utils.wrapStringInQuotes({ text: 'text' })).toBe('"text"')
})

test('should return 1 or 2', () => {
  const randNum = utils.rand({ bottom: 1, top: 2 })
  expect(randNum).toBeGreaterThanOrEqual(1)
  expect(randNum).toBeLessThanOrEqual(2)
})

test('should return  between 1.0 and 2.0', () => {
  const randNum = utils.randFloat({ bottom: 1, top: 2 })
  expect(randNum).toBeGreaterThanOrEqual(1)
  expect(randNum).toBeLessThanOrEqual(2)
})

test('should return 0 or 1', () => {
  const randNum = utils.rand({ bottom: 0, top: 1 })
  expect(randNum).toBeGreaterThanOrEqual(0)
  expect(randNum).toBeLessThanOrEqual(1)
})

test('Should return between 60 and 100', () => {
  const randNum = utils.rand({ bottom: 60, top: 100 })
  expect(randNum).toBeGreaterThanOrEqual(60)
  expect(randNum).toBeLessThanOrEqual(100)
})

test('Should return float between 60 and 100', () => {
  const randNum = utils.randFloat({ bottom: 60, top: 100 })
  expect(randNum).toBeGreaterThanOrEqual(60)
  expect(randNum).toBeLessThanOrEqual(100)
})

test('should return number between 0 and 1', () => {
  const randNum = utils.rand({ bottom: 0, top: 1 })
  expect(randNum).toBeGreaterThanOrEqual(0)
  expect(randNum).toBeLessThanOrEqual(1)
})

test('should return exactly 4', () => {
  const exactNum = utils.rand({ bottom: 3, top: 7, addFactor: 0, randFactor: 0 })
  expect(exactNum).toStrictEqual(3)
})

test('should be random from an array', () => {
  const testArray = [1, 2, 3, 4]
  const randomElement = utils.getRandFromArray({ arr: testArray })
  expect(testArray).toContain(randomElement)
})

test('should add to 2 and 2 to 4', () => {
  expect(utils.sum({ a: 2, b: 2 })).toBe(4)
})

test('Should get date of 2020-9-11', () => {
  const exactDate = utils.getRandomDate([2020], 9, 11)
  expect(exactDate).toStrictEqual('2020-9-11')
})

test('Should get date of 2020-9-11', () => {
  const exactDate = utils.getRandomDate([2020], 9).substr(0, 7)
  expect(exactDate).toStrictEqual('2020-9-')
})

test('Should get date of 2020-9-11', () => {
  const exactDate = utils.getRandomDate([2020]).substr(0, 5)
  expect(exactDate).toStrictEqual('2020-')
})

test('Should return 29', () => {
  const monthEnd = utils.getMonthEnd({ month: 2, year: 2000 })
  expect(monthEnd).toStrictEqual(29)
})

test('Should return 28', () => {
  const monthEnd = utils.getMonthEnd({ month: 2, year: 1900 })
  expect(monthEnd).toStrictEqual(28)
})

test('Should return 29', () => {
  const monthEnd = utils.getMonthEnd({ month: 2, year: 2016 })
  expect(monthEnd).toStrictEqual(29)
})

test('Should return 28', () => {
  const monthEnd = utils.getMonthEnd({ month: 2, year: 2017 })
  expect(monthEnd).toStrictEqual(28)
})

test('Should return 31', () => {
  const monthEnd = utils.getMonthEnd({ month: 12, year: 2000 })
  expect(monthEnd).toStrictEqual(31)
})

test('Should return 31', () => {
  const monthEnd = utils.getMonthEnd({ month: 4, year: 2000 })
  expect(monthEnd).toStrictEqual(30)
})

test('Should return between or equal to -1 and 1', () => {
  const sign = utils.getRandomSign()
  expect(sign).toBeGreaterThanOrEqual(-1)
  expect(sign).not.toBeLessThan(-1)
  expect(sign).toBeLessThanOrEqual(1)
  expect(sign).not.toBeGreaterThan(1)
})

test('Should return 5', () => {
  const sum = utils.getSequenceEnd({ numberToAdd: 1, nTimes: 5 })
  expect(sum).toStrictEqual(5)
})

test('Should return undefined', () => {
  const badMonth = () => utils.getMonthEnd({ month: 0, year: 0 })
  expect(badMonth).toThrowError(new Error('Invalid month, expected 1 - 12.'))
})
