const driver = require('../driver')

const type = async ({ selector, text }) => {
  await driver.waitFor(selector)
  return driver.type(selector, text)
}

const clearAndType = async ({ selector, text }) => {
  await driver.waitFor(selector)
  await driver.focus(selector)
  await driver.keydown('Control')
  await driver.keypress('A')
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
