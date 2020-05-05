const getInnerText = selector => {
  const { page } = global
  return page.$eval(selector, e => e.innerText)
}

module.exports = {
  getInnerText
}
