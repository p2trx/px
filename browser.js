const puppeteer = require('puppeteer')

let browser
let page

const startTracing = path => {
  return page.tracing.start({ path })
}

const stopTracing = () => {
  return page.tracing.stop()
}

const launch = async headless => {
  browser = await puppeteer.launch({ headless })
  page = await browser.newPage()
  return page.setViewport({ width: 1024, height: 768 })
}

const close = () => {
  return browser.close()
}

const goto = url => {
  return page.goto(url)
}

const click = selector => {
  return page.click(selector)
}

const waitForSelector = selector => {
  return page.waitForSelector(selector)
}

const type = (selector, text) => {
  return page.type(selector, text)
}

const focus = selector => {
  return page.focus(selector)
}

const keydown = key => {
  return page.keyboard.down(key)
}

const keyup = key => {
  return page.keyboard.up(key)
}

const keypress = key => {
  return page.keyboard.press(key)
}

const select = (selector, values) => {
  return page.select(selector, ...values)
}

const getInnerText = selector => {
  return page.$eval(selector, e => e.innerText)
}

module.exports = {
  startTracing,
  stopTracing,
  launch,
  close,
  goto,
  waitForSelector,
  click,
  type,
  select,
  getInnerText,
  keypress,
  keyup,
  keydown,
  focus
}
