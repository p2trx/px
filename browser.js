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

const select = async (selector, values) => {
  await waitForSelector(selector)
  return page.select(selector, ...values)
}

const getInnerText = async (selector) => {
  const element = await waitForSelector(selector)
  const innerText = await element.evaluate(e => e.innerText)
  return innerText
}

module.exports = {
  launch,
  close,
  goToPage,
  waitForSelector,
  click,
  type,
  select,
  getInnerText
}
