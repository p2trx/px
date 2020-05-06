const driver = require('../driver')

const click = async ({ selector, button }) => {
  await driver.waitForSelector(selector)
  return driver.click(selector, button)
}

module.exports = {
  click
}
