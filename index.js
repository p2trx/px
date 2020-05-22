const { join } = require('path')
const { setup } = require('./setup')

const { loadPackageDefinition, Server, ServerCredentials } = require('grpc')
const { loadSync } = require('@grpc/proto-loader')

const { invoke } = require('./bindings')

function main() {
  setup()
    .then(() => {
      const PROTO_PATH = join(__dirname, 'proto', 'px', 'px.proto')
      const packageDefinition = loadSync(PROTO_PATH)
      const protoDescriptor = loadPackageDefinition(packageDefinition)
      const px = protoDescriptor.px
      const port = process.argv[2]

      var server = new Server()
      server.addService(px.Browser.service, { Do: invoke })
      server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure())
      console.log('Starting PX server...')
      server.start()
      console.log(`PX server is running on port ${port}`)
    })
    .catch(error => {
      console.log('Fail to start PX browser', error)
    })
}

main()
