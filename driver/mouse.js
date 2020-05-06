const click = (selector, button) => {
  const { page } = global
  return page.click(selector, button)
}

module.exports = {
  click
}
