const driver = require('../driver')

const click = async ({ selector, button, clickCount }) => {
  await driver.waitForSelector(selector)
  return driver.click(selector, button, clickCount)
}

module.exports = {
  click
}
