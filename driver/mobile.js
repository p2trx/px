const tap = selector => {
  const { page } = global
  return page.tap(selector)
}

module.exports = {
  tap
}
