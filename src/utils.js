module.exports = class Utils {
  static wrapStringInQuotes ({ text }) {
    return '"' + text + '"'
  }

  static checkAndWrap ({ element }) {
    return typeof element === 'string'
      ? Utils.wrapStringInQuotes({ text: element })
      : element
  }

  static rand ({ bottom, top, addFactor = 0, randFactor = Math.random() }) {
    if (bottom === 0) addFactor = 1
    return (
      Math.floor(randFactor * (top - bottom + addFactor)) +
      (bottom + addFactor) -
      addFactor
    )
  }

  static randFloat ({ bottom, top, addFactor = 0, randFactor = Math.random() }) {
    if (bottom === 0) addFactor = 1
    return (
      randFactor * (top - bottom + addFactor) + (bottom + addFactor) - addFactor
    )
  }

  static getRandFromArray ({ arr }) {
    return arr[Utils.rand({ bottom: 0, top: arr.length - 1 })]
  }

  static sum ({ a, b }) {
    return a + b
  }

  static getRandomDate (
    years,
    randomMonth = Utils.rand({ bottom: 1, top: 12 }),
    day = undefined
  ) {
    return Utils.printRandDate({
      year: Utils.getRandFromArray({ arr: years }),
      month: randomMonth,
      day
    })
  }

  static printRandDate ({
    year,
    month,
    day = Utils.rand({ bottom: 1, top: Utils.getMonthEnd({ month, year }) })
  }) {
    return `${year}-${month}-${day}`
  }

  static getMonthEnd ({ month, year }) {
    if (month < 1 || month > 12) {
      throw new Error('Invalid month, expected 1 - 12.')
    }
    if (month === 2) {
      return year % 100 === 0
        ? year % 400 === 0
            ? 29
            : 28
        : year % 4 === 0
          ? 29
          : 28
    }
    return [4, 6, 9, 11].includes(month) ? 30 : 31
  }

  static getRandomSign () {
    return Utils.getRandFromArray({ arr: [1, -1, 0] })
  }

  static getSequenceEnd ({ numberToAdd, nTimes, base = 0 }) {
    if (nTimes > 0) {
      return Utils.getSequenceEnd({
        numberToAdd,
        nTimes: nTimes - 1,
        base: base + numberToAdd
      })
    }
    return base
  }
}
