const puppeteer = require('puppeteer')

const browser = require('./browser')
const keyboard = require('./keyboard')

const waitForSelector = selector => {
  const { page } = global
  return page.waitForSelector(selector)
}

const takeScreenshot = async (path, fullPage) => {
  const { page } = global
  await page.screenshot({ path, fullPage })
}

module.exports = {
  takeScreenshot,
  waitForSelector
}
