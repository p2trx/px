const { join } = require('path')

const { loadPackageDefinition, Server, ServerCredentials } = require('grpc')
const { loadSync } = require('@grpc/proto-loader')

const {
  launch,
  close,
  goToPage,
  click,
  type,
  clearAndType,
  select,
  getInnerText,
  keyPress,
  keyDown,
  keyUp,
  focus
} = require('./actions')

function doAction (call, callback) {
  let p = new Promise(function (resolve) {
    resolve()
  })
  const { actions } = call.request
  actions.forEach(function (action) {
    if (action.launchAction) {
      p = p.then(function () {
        const { headless = false } = action.launchAction
        return launch(headless)
      })
    } else if (action.closeAction) {
      p = p.then(function () {
        return close()
      })
    } else if (action.gotoAction) {
      p = p.then(function () {
        const { url } = action.gotoAction
        return goToPage(url)
      })
    } else if (action.clickAction) {
      p = p.then(function () {
        const { selector } = action.clickAction
        return click(selector)
      })
    } else if (action.typeAction) {
      p = p.then(function () {
        const { selector, text } = action.typeAction
        return type(selector, text)
      })
    } else if (action.clearAndTypeAction) {
      p = p.then(function () {
        const { selector, text } = action.clearAndTypeAction
        return clearAndType(selector, text)
      })
    } else if (action.selectAction) {
      p = p.then(function () {
        const { selector, values } = action.selectAction
        return select(selector, values)
      })
    } else if (action.getInnerTextAction) {
      p = p.then(function () {
        const { selector } = action.getInnerTextAction
        return getInnerText(selector)
      })
    } else if (action.keyPressAction) {
      p = p.then(function () {
        const { key } = action.keyPressAction
        return keyPress(key)
      })
    } else if (action.keyDownAction) {
      p = p.then(function () {
        const { key } = action.keyPressAction
        return keyDown(key)
      })
    } else if (action.keyUpAction) {
      p = p.then(function () {
        const { key } = action.keyUpAction
        return keyUp(key)
      })
    } else if (action.focus) {
      p = p.then(function () {
        const { selector } = action.focus
        return focus(selector)
      })
    }
  })
  p.then(function (result) {
    callback(null, {
      result
    })
  })
}

function main () {
  const PROTO_PATH = join(__dirname, '/px.proto')
  const packageDefinition = loadSync(PROTO_PATH)
  const protoDescriptor = loadPackageDefinition(packageDefinition)
  const px = protoDescriptor.px
  var server = new Server()
  server.addService(px.Browser.service, { Do: doAction })
  server.bind('0.0.0.0:50000', ServerCredentials.createInsecure())
  server.start()
}

main()
