const wait = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const waitForSelector = selector => {
  const { page } = global
  return page.waitForSelector(selector)
}

const waitFor = selectorOrXPath => {
  const { page } = global
  return page.waitFor(selectorOrXPath)
}

module.exports = {
  wait,
  waitForSelector,
  waitFor
}
