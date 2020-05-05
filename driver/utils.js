const puppeteer = require('puppeteer')

const browser = require('./browser')
const keyboard = require('./keyboard')

const waitForSelector = selector => {
  const { page } = global
  return page.waitForSelector(selector)
}

module.exports = {
  waitForSelector
}
