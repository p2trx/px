const driver = require('../driver')

const select = ({ selector, values }) => driver.select(selector, values)

const uploadFile = ({ selector, paths }) => driver.uploadFile(selector, paths)

module.exports = {
  select,
  uploadFile
}
