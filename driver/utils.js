const startTracing = (path, screenshots) => {
  const { page } = global
  return page.tracing.start({ screenshots, path })
}

const stopTracing = async () => {
  const { page } = global
  return page.tracing.stop()
}

const takeScreenshot = (path, fullPage) => {
  const { page } = global
  return page.screenshot({ path, fullPage })
}

const waitForSelector = selector => {
  const { page } = global
  return page.waitForSelector(selector)
}

module.exports = {
  startTracing,
  stopTracing,
  takeScreenshot,
  waitForSelector
}
