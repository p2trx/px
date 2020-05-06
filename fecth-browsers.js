const puppeteer = require('puppeteer');
const windowBrowserFetcher = puppeteer.createBrowserFetcher({ platform: 'win64' });
const linuxBrowserFetcher = puppeteer.createBrowserFetcher({ platform: 'linux' });
const macBrowserFetcher = puppeteer.createBrowserFetcher({ platform: 'mac' });
const revision = require('puppeteer/package').puppeteer.chromium_revision;

windowBrowserFetcher.download(revision)
  .then(() => console.log('Download window chromium browser '))
  .catch(error => console.log('Fail to download window chromium browser', error));

linuxBrowserFetcher.download(revision)
  .then(() => console.log('Download linux chromium browser'))
  .catch(error => console.log('Fail to download linux chromium browser', error));

macBrowserFetcher.download(revision)
  .then(() => console.log('Download mac chromium browser'))
  .catch(error => console.log('Fail to download mac chromium browser', error));