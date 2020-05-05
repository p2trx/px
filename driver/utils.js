const startTracing = async (path, screenshots) => {
  const { page } = global
  await page.tracing.start({ screenshots, path })
}

const stopTracing = async () => {
  const { page } = global
  await page.tracing.stop()
}

const takeScreenshot = async (path, fullPage) => {
  const { page } = global
  await page.screenshot({ path, fullPage })
}

const waitForSelector = async selector => {
  const { page } = global
  await page.waitForSelector(selector)
}

module.exports = {
  startTracing,
  stopTracing,
  takeScreenshot,
  waitForSelector
}
