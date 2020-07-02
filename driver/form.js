const { waitFor } = require('./wait')

const select = (selector, values) =>
  waitFor(selector).then(element => element.select(...values))

module.exports = {
  select
}
