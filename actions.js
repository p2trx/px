const puppeteer = require('puppeteer')

let browser
let page

const launch = async (headless = false) => {
  browser = await puppeteer.launch({ headless })
  page = await browser.newPage()
  return page.setViewport({ width: 1024, height: 768 })
}

const close = () => {
  return browser.close()
}

const goToPage = (url) => {
  return page.goto(url)
}

const click = (selector) => {
  waitForSelector(selector)
  return page.click(selector)
}

const waitForSelector = async (selector) => {
  return page.waitForSelector(selector)
}

const type = async (selector, text) => {
  await waitForSelector(selector)
  return page.type(selector, text)
}

const clearAndType = async (selector, text) => {
  await waitForSelector(selector)
  await page.focus(selector)
  await page.keyboard.down('Control')
  await page.keyboard.press('A')
  await page.keyboard.up('Control')
  await page.keyboard.press('Backspace')
  return page.type(selector, text)
}

const select = async (selector, values) => {
  await waitForSelector(selector)
  return page.select(selector, ...values)
}

const getInnerText = async (selector) => {
  const element = await waitForSelector(selector)
  const innerText = await element.evaluate(e => e.innerText)
  return innerText
}

const keyPress = async (key) => {
  return page.keyboard.press(key)
}

const keyDown = async (key) => {
  return page.keyboard.down(key)
}

const keyUp = async (key) => {
  return page.keyboard.up(key)
}

const focus = async (selector) => {
  return page.focus(selector)
}

module.exports = {
  launch,
  close,
  goToPage,
  waitForSelector,
  click,
  type,
  clearAndType,
  select,
  getInnerText,
  keyPress,
  keyUp,
  keyDown,
  focus
}
