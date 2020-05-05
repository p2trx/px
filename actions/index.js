const browser = require('./browser')
const mouse = require('./mouse')
const keyboard = require('./keyboard')
const getters = require('./getters')
const form = require('./form')

module.exports = {
  ...browser,
  ...mouse,
  ...keyboard,
  ...getters,
  ...form
}
