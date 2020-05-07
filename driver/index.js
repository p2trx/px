const browser = require('./browser')
const form = require('./form')
const keyboard = require('./keyboard')
const mouse = require('./mouse')
const screenshot = require('./screenshot')
const trace = require('./trace')
const wait = require('./wait')
const evaluate = require('./evaluate')

module.exports = {
  ...browser,
  ...form,
  ...keyboard,
  ...mouse,
  ...screenshot,
  ...trace,
  ...wait,
  ...evaluate
}
