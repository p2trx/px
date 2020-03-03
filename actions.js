const browser = require('./browser')

const launch = async (headless = false) => {
  await browser.launch(headless)
  return browser.startTracing()
}

const close = async () => {
  await browser.close()
  return browser.stopTracing('trace.json')
}

const goto = url => {
  return browser.goto(url)
}

const click = async selector => {
  await browser.waitForSelector(selector)
  return browser.click(selector)
}

const type = async (selector, text) => {
  await browser.waitForSelector(selector)
  return browser.type(selector, text)
}

const clearAndType = async (selector, text) => {
  await browser.waitForSelector(selector)
  await browser.focus(selector)
  await browser.keydown('Control')
  await browser.keypress('A')
  await browser.keyup('Control')
  await browser.keypress('Backspace')
  return browser.type(selector, text)
}

const select = async (selector, values) => {
  await browser.waitForSelector(selector)
  return browser.select(selector, values)
}

const getInnerText = async selector => {
  await browser.waitForSelector(selector)
  const innerText = await browser.getInnerText(selector)
  return innerText
}

const keyPress = key => {
  return browser.keypress(key)
}

const keyDown = key => {
  return browser.keydown(key)
}

const keyUp = key => {
  return browser.keyup(key)
}

const focus = async selector => {
  return browser.focus(selector)
}

module.exports = {
  launch,
  close,
  goto,
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
