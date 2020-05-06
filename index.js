const { join } = require('path')

const { loadPackageDefinition, Server, ServerCredentials } = require('grpc')
const { loadSync } = require('@grpc/proto-loader')

const { invoke } = require('./bindings')

function main() {
  const PROTO_PATH = join(__dirname, '/px.proto')
  const packageDefinition = loadSync(PROTO_PATH)
  const protoDescriptor = loadPackageDefinition(packageDefinition)
  const px = protoDescriptor.px
  var server = new Server()
  server.addService(px.Browser.service, { Do: invoke })
  server.bind('0.0.0.0:50000', ServerCredentials.createInsecure())
  console.log("Starting PX server...")
  server.start()
  console.log("PX server is running on port 5000")
}

main()
