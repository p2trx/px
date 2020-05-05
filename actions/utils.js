const driver = require('../driver')

const startTracing = ({ path, screenshots = true }) => {
  return driver.startTracing(path, screenshots)
}

const stopTracing = () => {
  return driver.stopTracing()
}

const takeScreenshot = ({ path, fullPage = true }) => {
  return driver.takeScreenshot(path, fullPage)
}

module.exports = {
  startTracing,
  stopTracing,
  takeScreenshot
}
