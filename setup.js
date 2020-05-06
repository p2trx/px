const puppeteer = require('puppeteer');
const { getBrowserFolder } = require('./driver/browser');

const revision = require('puppeteer/package').puppeteer.chromium_revision;

const setupBrowser = async () => {
  const isPkg = typeof process.pkg !== 'undefined'
  const projectPath = isPkg ? getBrowserFolder() : null;
  const browserFetcher = puppeteer.createBrowserFetcher( { path: projectPath});
  console.log(`Download chromium browser: ${revision} `)
  return  browserFetcher.download(revision)
    .then(() => console.log(`Download successfully chromium browser: ${revision} `))
    .catch(error => console.log(`Fail to download chromium browser: ${revision}`, error));
}

const setup = async () => {
  return setupBrowser();
}

module.exports = { setup }