const browser = require('./browser')
const form = require('./form')
const getters = require('./getters')
const keyboard = require('./keyboard')
const mouse = require('./mouse')
const screenshot = require('./screenshot')
const trace = require('./trace')

module.exports = {
  ...browser,
  ...form,
  ...getters,
  ...keyboard,
  ...mouse,
  ...screenshot,
  ...trace
}
