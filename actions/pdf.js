const driver = require('../driver')

const pdf = ({ path, format }) => {
  return driver.pdf(path, format)
}

module.exports = {
  pdf
}
