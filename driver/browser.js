const puppeteer = require('puppeteer')

const launch = async headless => {
  global.browser = await puppeteer.launch({ headless })
  const { browser } = global
  global.page = await browser.newPage()
  const { page } = global
  return page.setViewport({ width: 1024, height: 768 })
}

const close = () => {
  const { browser } = global
  return browser.close()
}

const goto = url => {
  const { page } = global
  return page.goto(url)
}

const focus = selector => {
  const { page } = global
  return page.focus(selector)
}

const startTracing = path => {
  const { page } = global
  return page.tracing.start({ screenshots: true, path })
}

const stopTracing = () => {
  const { page } = global
  return page.tracing.stop()
}

module.exports = {
  close,
  focus,
  goto,
  launch,
  startTracing,
  stopTracing
}
