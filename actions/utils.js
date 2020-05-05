const driver = require('../driver')

const takeScreenshot = async ({ path, fullPage = false }) => {
  return driver.takeScreenshot(path, fullPage)
}

module.exports = {
  takeScreenshot
}
