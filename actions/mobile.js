const driver = require('../driver')

const tap = ({ selector }) => driver.tap(selector)

module.exports = {
  tap
}
