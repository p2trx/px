const path = require('path')

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const puppeteer = require('puppeteer')

const queue = require('queue')

const q = queue({
    concurrency: 1,
    autostart: true
})
q.on('error', function() {
    console.log('Error: ', arguments)
})

const results = []

let browser
let page

function doAction(call, callback) {
    const { actions } = call.request
    actions.forEach(function(action) {
        if (action.launchAction) {
            q.push(async function(cb) {
                const { headless } = action.launchAction
                browser = await puppeteer.launch({ headless })
                page = await browser.newPage()
                await page.setViewport({ width: 1024, height: 768})
                cb()
            })
        } else if (action.gotoAction) {
            q.push(async function(cb) {
                const { url } = action.gotoAction
                await page.goto(url)
                cb()
            })
        } else if (action.clickAction) {
            q.push(async function(cb) {
                const { selector } = action.clickAction
                await page.waitForSelector(selector)
                await page.click(selector)
                cb()
            })
        } else if (action.typeAction) {
            q.push(async function(cb) {
                const { selector, text } = action.typeAction
                await page.waitForSelector(selector)
                await page.type(selector, text)
                cb()
            })
        } else if (action.selectAction) {
            q.push(async function(cb) {
                const { selector, values } = action.selectAction
                await page.waitForSelector(selector)
                await page.select(selector, ...values)
                cb()
            })
        } else if (action.storeInnerTextAction) {
            q.push(async function(cb) {
                const { key, selector } = action.storeInnerTextAction
                const element = await page.waitForSelector(selector)
                const innerText = await page.$eval(selector, e => e.innerText);
                console.log(innerText)
                cb()
            })
        } else if (action.storeEvalAction) {
            q.push(async function(cb) {
                const { key, script } = action.storeEvalAction
                const result = await page.evaluate(script)
                console.log(result)
                cb()
            })
        }
    })
    callback(null, { })
}

function main() {
    const PROTO_PATH = path.join(__dirname, '/px.proto')
    const packageDefinition = protoLoader.loadSync(PROTO_PATH)
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
    const px = protoDescriptor.px
    var server = new grpc.Server()
    server.addService(px.Browser.service, { Do: doAction })
    server.bind('0.0.0.0:50000', grpc.ServerCredentials.createInsecure())
    server.start()
}

main()