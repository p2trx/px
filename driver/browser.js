const puppeteer = require('puppeteer')
const path = require('path')

const launch = async headless => {
  const executablePath = getChromiumExecutablePath();
  global.browser = await puppeteer.launch({ headless, executablePath })
  const { browser } = global
  global.page = await browser.newPage()
  const { page } = global
  return page.setViewport({ width: 1024, height: 768 })
}

const getChromiumExecutablePath = () => {
  let chromiumExecutablePath = puppeteer.executablePath();
  const isPkg = typeof process.pkg !== 'undefined'
  if (isPkg) {
    chromiumExecutablePath = puppeteer.executablePath().replace(
      /^.*?\/node_modules\/puppeteer\/\.local-chromium/,
      path.join(path.dirname(process.execPath), 'chromium')
    )
  }
  return chromiumExecutablePath;
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

module.exports = {
  close,
  focus,
  goto,
  launch
}
