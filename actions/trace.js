const driver = require('../driver')

const startTracing = async ({ path, screenshots = true }) => {
  await driver.startTracing(path, screenshots)
}

const stopTracing = async () => {
  await driver.stopTracing()
}

module.exports = {
  startTracing,
  stopTracing
}
