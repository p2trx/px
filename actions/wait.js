const driver = require('../driver')

const wait = ({ time }) => {
  return driver.wait(time)
}

const waitFor = ({ selector }) => {
  return driver.waitFor(selector)
}

module.exports = {
  wait,
  waitFor
}
