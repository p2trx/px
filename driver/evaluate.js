const evaluate = async evaluateFunction => {
  const { page } = global
  const result = await page.evaluateHandle(evaluateFunction)
  return result
}

const getInnerText = selector => {
  const { page } = global
  return page.$eval(selector, e => e.innerText)
}

module.exports = {
  evaluate,
  getInnerText
}
