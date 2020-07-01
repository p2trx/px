const driver = require('../driver')

const click = ({ selector, option }) => {
  return driver.click(selector, option)
}

const clickAndWaitForNavigation = ({ selector, option, waitOption }) => {
  return driver.clickAndWaitForNavigation(selector, option, waitOption)
}

module.exports = {
  click,
  clickAndWaitForNavigation
}
