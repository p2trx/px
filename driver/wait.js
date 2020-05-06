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

module.exports = {
  wait,
  waitForSelector
}
