const driver = require('../driver')

const screenshot = ({ path, fullPage }) => {
  return driver.screenshot(path, fullPage)
}

module.exports = {
  screenshot
}
