const puppeteer = require('puppeteer')
const { getExecutablePath } = require('../setup')

const close = () => {
  const { browser } = global
  return browser.close()
}

const cookies = async () => {
  const { page } = global
  return page.cookies()
}

const deleteCookie = async name => {
  const { page } = global
  const result = await page.deleteCookie({ name })
  return result
}

const emulate = device => {
  const genDevice = puppeteer.devices[device]
  const { page } = global
  return page.emulate(genDevice)
}

const emulateMediaType = type => {
  const { page } = global
  return page.emulateMediaType(type)
}

const focus = selector => {
  const { page } = global
  return page.focus(selector)
}

const goto = url => {
  const { page } = global
  return page.goto(url)
}

const launch = async headless => {
  const executablePath = getExecutablePath()
  const browser = await puppeteer.launch({ headless, executablePath })
  global.browser = browser
  global.page = await browser.newPage()
  return setViewport(1024, 768)
}

const reload = () => {
  const { page } = global
  return page.reload()
}

const setCookie = async (name, value) => {
  const { page } = global
  const result = await page.setCookie({ name, value })
  return result
}

const setViewport = (width, height) => {
  const { page } = global
  return page.setViewport({ width, height })
}

module.exports = {
  close,
  cookies,
  deleteCookie,
  emulate,
  emulateMediaType,
  focus,
  goto,
  launch,
  reload,
  setCookie,
  setViewport
}
