const driver = require('../driver')

const launch = async ({ headless = false }) => {
  await driver.launch(headless)
  return driver.startTracing('trace.json')
}

const close = async () => {
  await driver.stopTracing()
  return driver.close()
}

const goto = ({ url }) => {
  return driver.goto(url)
}

const focus = async ({ selector }) => {
  return driver.focus(selector)
}

module.exports = {
  close,
  focus,
  goto,
  launch
}
