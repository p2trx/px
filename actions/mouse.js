const driver = require('../driver')

const click = async ({ selector, button, clickCount }) => {
  await driver.waitFor(selector)
  return driver.click(selector, button, clickCount)
}

module.exports = {
  click
}
