const browser = require('./browser')
const keyboard = require('./keyboard')
const mouse = require('./mouse')
const utils = require('./utils')
const getters = require('./getters')
const form = require('./form')

module.exports = {
  ...browser,
  ...keyboard,
  ...mouse,
  ...utils,
  ...getters,
  ...form
}
