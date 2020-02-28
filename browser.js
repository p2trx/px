const puppeteer = require('puppeteer')

let browser
let page

const launchAction = async (headless = false) => {
    browser = await puppeteer.launch({ headless, args: ['--no-sandbox'] })
    page = await browser.newPage()
    return page.setViewport({ width: 1024, height: 768})
}

const goToPage = (url) => {
    return page.goto(url)
}

const click = (selector) => {
    waitForSelector(selector)
    return page.click(selector)
}

const waitForSelector = async (selector) => {
    return await page.waitForSelector(selector)
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
    launchAction, 
    goToPage,
    waitForSelector,
    click,
    type,
    select,
    getInnerText
}