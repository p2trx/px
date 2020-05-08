const pdf = (path, format) => {
  const { page } = global
  return page.pdf({ path, format })
}

module.exports = {
  pdf
}
