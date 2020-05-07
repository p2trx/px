const driver = require('../driver')

const getInnerText = async ({ selector }) => {
  await driver.waitForSelector(selector)
  const innerText = await driver.getInnerText(selector)
  return innerText
}

const evaluate = async ({ evaluateFunction }) => {
  const result = await driver.evaluate(evaluateFunction)
  return result
}

module.exports = {
  getInnerText,
  evaluate
}
