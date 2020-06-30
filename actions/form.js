const driver = require('../driver')

const select = async ({ selector, values }) => {
  await driver.waitFor(selector)
  return driver.select(selector, values)
}

module.exports = {
  select
}
