const { waitFor } = require('./wait')

const click = (selector, option) =>
  waitFor(selector).then(element => element.click(option))

const clickAndWaitForNavigation = (selector, option, waitOption) =>
  Promise.all([
    global.page.waitForNavigation(waitOption),
    click(selector, option)
  ])

module.exports = {
  click,
  clickAndWaitForNavigation
}
