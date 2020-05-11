const driver = require('../driver')

const tap = async ({ selector }) => {
  await driver.waitForSelector(selector)
  return driver.tap(selector)
}

module.exports = {
  tap
}
