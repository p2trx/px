const screenshot = (path, fullPage) => {
  const { page } = global
  return page.screenshot({ path, fullPage })
}

module.exports = {
  screenshot
}
