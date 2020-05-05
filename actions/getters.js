const driver = require('../driver')

const getInnerText = async ({ selector }) => {
  await driver.waitForSelector(selector)
  const innerText = await driver.getInnerText(selector)
  return innerText
}

module.exports = {
  getInnerText
}
