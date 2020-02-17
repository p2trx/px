const path = require('path')

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const puppeteer = require('puppeteer')

let browser
let page

function doAction(call, callback) {
    let p = new Promise(function(resolve) {
        resolve()
    })
    const { actions } = call.request
    let result
    actions.forEach(function(action) {
        if (action.launchAction) {
            p = p.then(async function() {
                const { headless } = action.launchAction
                browser = await puppeteer.launch({ headless })
                page = await browser.newPage()
                return page.setViewport({ width: 1024, height: 768})
            })
        } else if (action.gotoAction) {
            p = p.then(async function() {
                const { url } = action.gotoAction
                return page.goto(url)
            })
        } else if (action.clickAction) {
            p = p.then(async function() {
                const { selector } = action.clickAction
                await page.waitForSelector(selector)
                return page.click(selector)
            })
        } else if (action.typeAction) {
            p = p.then(async function(cb) {
                const { selector, text } = action.typeAction
                await page.waitForSelector(selector)
                return page.type(selector, text)
            })
        } else if (action.selectAction) {
            p = p.then(async function(cb) {
                const { selector, values } = action.selectAction
                await page.waitForSelector(selector)
                return page.select(selector, ...values)
            })
        } else if (action.getInnerTextAction) {
            p = p.then(async function(cb) {
                const { selector } = action.getInnerTextAction
                const element = await page.waitForSelector(selector)
                const innerText = await element.evaluate(e => e.innerText)
                result = innerText
            })
        }
    })
    p.then(function() {
        callback(null, {
            result
        })
    })
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