const { waitFor } = require('./wait')

const select = (selector, values) =>
  waitFor(selector).then(element => element.select(...values))

const uploadFile = (selector, paths) =>
  waitFor(selector).then(element => element.uploadFile(...paths))

module.exports = {
  select,
  uploadFile
}
