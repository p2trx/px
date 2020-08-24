const driver = require('../driver')

const select = ({ selector, values }) => driver.select(selector, values)

module.exports = {
  select
}
