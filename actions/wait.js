const driver = require('../driver')

const wait = ({ time }) => {
  return driver.wait(time)
}

module.exports = {
  wait
}
