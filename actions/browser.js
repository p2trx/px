const driver = require('../driver')

const launch = ({ headless, args }) => {
  return driver.launch(headless, args)
}

const close = () => {
  return driver.close()
}

const goto = ({ url }) => {
  return driver.goto(url)
}

const focus = async ({ selector }) => {
  return driver.focus(selector)
}

const reload = () => {
  return driver.reload()
}

const setViewport = ({ width, height }) => {
  return driver.setViewport(width, height)
}

const emulate = ({ device }) => {
  return driver.emulate(device)
}

const emulateMediaType = async ({ type }) => {
  return driver.emulateMediaType(type)
}

const setCookie = async ({ cookie }) => {
  return driver.setCookie(cookie)
}

const cookies = async () => {
  return driver.cookies()
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
