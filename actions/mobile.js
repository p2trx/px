const driver = require('../driver')

const tap = async ({ selector }) => {
  await driver.waitFor(selector)
  return driver.tap(selector)
}

module.exports = {
  tap
}
