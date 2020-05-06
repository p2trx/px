const driver = require('../driver')

const takeScreenshot = ({ path, fullPage }) => {
  return driver.takeScreenshot(path, fullPage)
}

module.exports = {
  takeScreenshot
}
