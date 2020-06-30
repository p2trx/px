const driver = require('../driver')

const click = async ({ selector, button, clickCount }) => {
  return driver.click(selector, button, clickCount)
}

module.exports = {
  click
}
