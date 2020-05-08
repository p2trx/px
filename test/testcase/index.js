const webScenario = require('./webScenario')
const mobileScenario = require('./mobileScenario')

module.exports = {
  ...webScenario,
  ...mobileScenario
}
