const driver = require('../driver')

const launch = ({ headless = false }) => {
  return driver.launch(headless)
}

const close = () => {
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
