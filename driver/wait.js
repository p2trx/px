const waitForSelector = selector => {
  const { page } = global
  return page.waitForSelector(selector)
}

module.exports = {
  waitForSelector
}
