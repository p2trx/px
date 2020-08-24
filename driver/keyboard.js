const { waitFor } = require('./wait')

const keydown = key => {
  const { page } = global
  return page.keyboard.down(key)
}

const keyup = key => {
  const { page } = global
  return page.keyboard.up(key)
}

const keypress = key => {
  const { page } = global
  return page.keyboard.press(key)
}

const type = (selector, text) =>
  waitFor(selector).then(element => element.type(text))

module.exports = {
  keydown,
  keypress,
  keyup,
  type
}
