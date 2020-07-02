const { waitFor } = require('./wait')

const tap = selector => waitFor(selector).then(element => element.tap())

module.exports = {
  tap
}
