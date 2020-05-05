const driver = require('../driver')

const click = async ({ selector }) => {
  await driver.waitForSelector(selector)
  return driver.click(selector)
}

module.exports = {
  click
}
