const driver = require('../driver')

const evaluate = async ({ pageFunction }) => {
  const result = await driver.evaluate(pageFunction)
  return result
}

const getInnerText = ({ selector }) => driver.getInnerText(selector)

module.exports = {
  evaluate,
  getInnerText
}
