const select = (selector, values) => {
  const { page } = global
  return page.select(selector, ...values)
}

module.exports = {
  select
}
