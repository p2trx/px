const path = require('path')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const testcase = require('./testcase')

main()

function main() {
  const PROTO_PATH = path.join(__dirname, '../px.proto')
  const packageDefinition = protoLoader.loadSync(PROTO_PATH)
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
  const px = protoDescriptor.px
  const Browser = px.Browser
  const client = new Browser(
    'localhost:50000',
    grpc.credentials.createInsecure()
  )
  const actions = {
    actions: [
      {
        launchAction: {
          headless: false
        }
      }
    ]
  }
  client.do(actions, function(err, response) {
    if (err) {
      console.error('Cannot execute actions', err)
    }
    doActions(client)
  })
}

function doActions(client) {
  const begin = new Date()
  const scenario = testcase.webScenario

  const actions = []
  const loopTimes = 1
  for (var i = 0; i < loopTimes; i++) {
    actions.push(...scenario)
  }
  client.do({ actions }, function(err, response) {
    if (err) {
      console.error('Cannot execute actions', err)
    }
    const end = new Date()
    console.log(end.getTime() - begin.getTime())
  })
}
