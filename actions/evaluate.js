const driver = require('../driver')

const evaluate = async ({ evaluateFunction }) => {
  const result = await driver.evaluate(evaluateFunction)
  return result
}

const getInnerText = async ({ selector }) => {
  await driver.waitForSelector(selector)
  const innerText = await driver.getInnerText(selector)
  return innerText
}

module.exports = {
  evaluate,
  getInnerText
}
