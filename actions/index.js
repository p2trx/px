const browser = require('./browser')
const evaluate = require('./evaluate')
const form = require('./form')
const keyboard = require('./keyboard')
const mobile = require('./mobile')
const mouse = require('./mouse')
const pdf = require('./pdf')
const screenshot = require('./screenshot')
const trace = require('./trace')
const wait = require('./wait')

module.exports = {
  ...browser,
  ...evaluate,
  ...form,
  ...keyboard,
  ...mobile,
  ...mouse,
  ...pdf,
  ...screenshot,
  ...trace,
  ...wait
}
