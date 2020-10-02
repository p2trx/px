const driver = require('../driver')

const type = ({ selector, text }) => driver.type(selector, text)

const clearAndType = async ({ selector, text }) => {
  await driver.focus(selector)
  await driver.click(selector, { clickCount: 3 })
  await driver.keyup('Control')
  await driver.keypress('Backspace')
  return driver.type(selector, text)
}

const keyPress = ({ key }) => {
  return driver.keypress(key)
}

const keyDown = ({ key }) => {
  return driver.keydown(key)
}

const keyUp = ({ key }) => {
  return driver.keyup(key)
}

module.exports = {
  clearAndType,
  keyDown,
  keyPress,
  keyUp,
  type
}
