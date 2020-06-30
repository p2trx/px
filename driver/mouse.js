const { waitFor } = require('./wait')

const click = async (selector, button, clickCount) => {
  const element = await waitFor(selector)

  const { page } = global
  const options = {
    button,
    clickCount
  }
  return Promise.all([page.waitForNavigation(), element.click(options)])
}

module.exports = {
  click
}
