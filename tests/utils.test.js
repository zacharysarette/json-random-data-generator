const utils = require('../src/utils')

test('should return wrapped quote', () => {
  expect(utils.wrapStringInQuotes('text')).toBe('"text"')
})

test('should return 1 or 2', () => {
  const randNum = utils.rand(1, 2)
  expect(randNum).toBeGreaterThanOrEqual(1)
  expect(randNum).toBeLessThanOrEqual(2)
})

test('should return 0 or 1', () => {
  const randNum = utils.rand(0, 1)
  expect(randNum).toBeGreaterThanOrEqual(0)
  expect(randNum).toBeLessThanOrEqual(1)
})

test('should return number between 0 and 1', () => {
  const randNum = utils.rand(0, 1)
  expect(randNum).toBeGreaterThanOrEqual(0)
  expect(randNum).toBeLessThanOrEqual(1)
})

test('should return exactly 4', () => {
  const exactNum = utils.rand(3, 7, 0, 0)
  expect(exactNum).toStrictEqual(3)
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

test('should return 0', () => {
  let j = 0
  const addJ = () => { j += 1 }
  utils.doXTimes(addJ, -1)
  expect(j).toBe(0)
})

test('should return 5', () => {
  let j = 0
  const addJ = (adder = 1) => { j += adder }
  utils.doXTimes(addJ, 3, [2], addJ)
  expect(j).toBe(8)
})

test('should return 5', () => {
  let j = 0
  const addJ = (adder = 1) => { j += adder }
  utils.doXTimes(addJ, 3, [2])
  expect(j).toBe(6)
})

test('should return 5', () => {
  const j = 0
  const addJ = (adder = 1) => { return j }
  utils.doXTimes(addJ, 3, [2], addJ)
  expect(j).toBe(0)
})

test('should add to 2 and 2 to 4', () => {
  expect(utils.sum(2, 2)).toBe(4)
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
  const monthEnd = utils.getMonthEnd(2, 2000)
  expect(monthEnd).toStrictEqual(29)
})

test('Should return 28', () => {
  const monthEnd = utils.getMonthEnd(2, 1900)
  expect(monthEnd).toStrictEqual(28)
})

test('Should return 29', () => {
  const monthEnd = utils.getMonthEnd(2, 2016)
  expect(monthEnd).toStrictEqual(29)
})

test('Should return 28', () => {
  const monthEnd = utils.getMonthEnd(2, 2017)
  expect(monthEnd).toStrictEqual(28)
})

test('Should return 31', () => {
  const monthEnd = utils.getMonthEnd(12, 2000)
  expect(monthEnd).toStrictEqual(31)
})

test('Should return 31', () => {
  const monthEnd = utils.getMonthEnd(4, 2000)
  expect(monthEnd).toStrictEqual(30)
})

test('Should return between or equal to -1 and 1', () => {
  const sign = utils.getRandomSign()
  expect(sign).toBeGreaterThanOrEqual(-1)
  expect(sign).not.toBeLessThan(-1)
  expect(sign).toBeLessThanOrEqual(1)
  expect(sign).not.toBeGreaterThan(1)
})

test('Should return 3', () => {
  const sum = utils.getSequenceEnd(1, 5)
  expect(sum).toStrictEqual(5)
})

test('Should return undefined', () => {
  expect(utils.getMonthEnd(0, 0)).toBeUndefined()
})
