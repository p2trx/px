const { waitFor } = require('./wait')

const evaluate = async pageFunction => {
  const { page } = global
  const result = await page.evaluateHandle(pageFunction)
  return result
}

const getInnerText = selector => waitFor(selector).evaluate(e => e.innerText)

module.exports = {
  evaluate,
  getInnerText
}
