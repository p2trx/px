const startTracing = (path, screenshots) => {
  const { page } = global
  return page.tracing.start({ screenshots, path })
}

const stopTracing = async () => {
  const { page } = global
  return page.tracing.stop()
}

module.exports = {
  startTracing,
  stopTracing
}
