const driver = require('../driver')

const launch = ({ headless = false, args }) => {
  return driver.launch(headless, args)
}

const close = () => {
  return driver.close()
}

const cookies = async () => {
  return driver.cookies()
}

const deleteCookie = async ({ name }) => {
  return driver.deleteCookie(name)
}

const emulate = ({ device }) => {
  return driver.emulate(device)
}

const emulateMediaType = async ({ type }) => {
  return driver.emulateMediaType(type)
}

const focus = async ({ selector }) => {
  return driver.focus(selector)
}

const goto = ({ url }) => {
  return driver.goto(url)
}

const reload = () => {
  return driver.reload()
}

const setCookie = async ({ name, value }) => {
  return driver.setCookie(name, value)
}

const setViewport = ({ width, height }) => {
  return driver.setViewport(width, height)
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
