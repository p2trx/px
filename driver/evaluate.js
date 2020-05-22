const evaluate = async pageFunction => {
  const { page } = global
  const result = await page.evaluateHandle(pageFunction)
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
