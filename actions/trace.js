const driver = require('../driver')

const startTracing = ({ path, screenshots = true }) => {
  return driver.startTracing(path, screenshots)
}

const stopTracing = () => {
  return driver.stopTracing()
}

module.exports = {
  startTracing,
  stopTracing
}
