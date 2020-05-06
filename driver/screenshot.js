const takeScreenshot = (path, fullPage) => {
  const { page } = global
  return page.screenshot({ path, fullPage })
}

module.exports = {
  takeScreenshot
}
