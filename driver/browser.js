const puppeteer = require('puppeteer')

const launch = async headless => {
  global.browser = await puppeteer.launch({
    headless
  })
  const { browser } = global
  global.page = await browser.newPage()
  return setViewport(1024, 768)
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

const reload = () => {
  const { page } = global
  return page.reload()
}

const setViewport = (width, height) => {
  const { page } = global
  return page.setViewport({ width, height })
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

const setCookie = async cookie => {
  const { page } = global
  const result = await page.setCookie(cookie)
  return result
}

const cookies = async () => {
  const { page } = global
  const cookies = await page.cookies()
  console.log(cookies)
}

module.exports = {
  close,
  focus,
  goto,
  launch,
  reload,
  setViewport,
  emulate,
  emulateMediaType,
  setCookie,
  cookies
}
