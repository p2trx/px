const getInnerText = selector => {
  const { page } = global
  return page.$eval(selector, e => e.innerText)
}

const evaluate = async evaluateFunction => {
  const { page } = global
  const result = await page.evaluateHandle(evaluateFunction)
  return result
}

module.exports = {
  getInnerText,
  evaluate
}
