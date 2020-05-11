const path = require('path')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const { webScenario } = require('./webScenario')
const { mobileScenario } = require('./mobileScenario')

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
  const actions = [...webScenario, ...mobileScenario]
  client.do({ actions }, function(err, response) {
    if (err) {
      console.error('Cannot execute actions', err)
    }
  })
}
