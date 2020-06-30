const driver = require('../driver')

const click = async ({ selector, button, clickCount }) => {
  const element = await driver.waitFor(selector)

  const options = {
    button,
    clickCount
  }
  return element.click(options)
}

module.exports = {
  click
}
