const puppeteer = require('puppeteer')

const revision = require('puppeteer/package').puppeteer.chromium_revision

const path = require('path')

var os = require('os');

const getExecutablePath = () => {
  let chromiumExecutablePath = puppeteer.executablePath()
  const isPkg = typeof process.pkg !== 'undefined'
  if (isPkg) {
    if (os.type() === 'Windows_NT') {
      chromiumExecutablePath = chromiumExecutablePath
        .replace(
          /^.*?\\node_modules\\puppeteer\\\.local-chromium/,
          getBrowserFolder()
        )
    } else {
      chromiumExecutablePath = chromiumExecutablePath
        .replace(
          /^.*?\/node_modules\/puppeteer\/\.local-chromium/,
          getBrowserFolder()
        )
    }
  }
  return chromiumExecutablePath
}

const getBrowserFolder = () => {
  return path.join(path.dirname(process.execPath), '.local-chromium')
}

const setupBrowser = async () => {
  const isPkg = typeof process.pkg !== 'undefined'
  let projectPath
  if (isPkg) {
    projectPath = getBrowserFolder()
    console.log(`Download chromium browser ${revision} to ${projectPath}`)
  }
  const browserFetcher = puppeteer.createBrowserFetcher({ path: projectPath })
  return browserFetcher
    .download(revision)
    .then(() =>
      console.log(`Download successfully chromium browser: ${revision} `)
    )
    .catch(error =>
      console.log(`Fail to download chromium browser: ${revision}`, error)
    )
}

const setup = async () => {
  return setupBrowser()
}

module.exports = {
  getExecutablePath,
  setup
}
