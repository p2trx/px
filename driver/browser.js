const puppeteer = require('puppeteer')
const path = require('path')

const launch = async headless => {
  const executablePath = getExecutablePath();
  global.browser = await puppeteer.launch({ headless, executablePath })
  const { browser } = global
  global.page = await browser.newPage()
  const { page } = global
  return page.setViewport({ width: 1024, height: 768 })
}

const getExecutablePath = () => {
  let chromiumExecutablePath = puppeteer.executablePath();
  const isPkg = typeof process.pkg !== 'undefined'
  if (isPkg) {
    chromiumExecutablePath = puppeteer.executablePath().replace(
      /^.*?\/node_modules\/puppeteer\/\.local-chromium/,
      getBrowserFolder()
    )
  }
  return chromiumExecutablePath;
}

const getBrowserFolder = () => {
  // return path.join(path.dirname(process.execPath), '.local-chromium');
  return path.join(require('os').homedir(), '.local-chromium');
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
  launch,
  getBrowserFolder
}
