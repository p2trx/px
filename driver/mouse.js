const click = selector => {
  const { page } = global
  return page.click(selector)
}

module.exports = {
  click
}
