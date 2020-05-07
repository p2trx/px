const click = (selector, button, clickCount) => {
  const { page } = global
  const options = {
    button,
    clickCount
  }
  return page.click(selector, options)
}

module.exports = {
  click
}
