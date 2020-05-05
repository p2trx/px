const browser = require('./browser')
const form = require('./form')
const getters = require('./getters')
const keyboard = require('./keyboard')
const mouse = require('./mouse')
const utils = require('./utils')

module.exports = {
  ...browser,
  ...form,
  ...getters,
  ...keyboard,
  ...mouse,
  ...utils
}
