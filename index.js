const path = require('path')

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const Browser = require('./browser');

function doAction(call, callback) {
    let p = new Promise(function(resolve) {
        resolve()
    })
    const { actions } = call.request
    actions.forEach(function(action) {
        if (action.launchAction) {
            p = p.then(function() {
                const { headless = false } = action.launchAction
                return Browser.launchAction(headless);
            })
        } else if (action.gotoAction) {
            p = p.then(function() {
                const { url } = action.gotoAction
                return Browser.goToPage(url);
            })
        } else if (action.clickAction) {
            p = p.then(function() {
                const { selector } = action.clickAction
                return Browser.click(selector)
            })
        } else if (action.typeAction) {
            p = p.then(function() {
                const { selector, text } = action.typeAction
                return Browser.type(selector, text)
            })
        } else if (action.selectAction) {
            p = p.then(function(cb) {
                const { selector, values } = action.selectAction
                return Browser.select(selector, values)
            })
        } else if (action.getInnerTextAction) {
            p = p.then(function(cb) {
                const { selector } = action.getInnerTextAction
                return Browser.getInnerText(selector)
            })
        }
    })
    p.then(function(result) {
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