const path = require('path')

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

main()

function main() {
  const PROTO_PATH = path.join(__dirname, '/px.proto')
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
  const scenario = [
    {
      gotoAction: {
        url: 'https://katalon-test.s3.amazonaws.com/aut/html/form.html'
      }
    },
    {
      startTracingAction: {
        path: 'trace.json'
      }
    },
    {
      typeAction: {
        selector: '#first-name',
        text: 'First Name'
      }
    },
    {
      typeAction: {
        selector: '#last-name',
        text: 'Last Name'
      }
    },
    {
      clickAction: {
        selector: 'input[type=radio][name=gender]'
      }
    },
    {
      clickAction: {
        selector: '#dob'
      }
    },
    {
      clickAction: {
        selector:
          'body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)'
      }
    },
    {
      typeAction: {
        selector: '#address',
        text: 'Address'
      }
    },
    {
      typeAction: {
        selector: '#email',
        text: 'email@email.com'
      }
    },
    {
      typeAction: {
        selector: '#password',
        text: 'Password'
      }
    },
    {
      typeAction: {
        selector: '#company',
        text: 'Company'
      }
    },
    {
      selectAction: {
        selector: '#role',
        values: ['Manager']
      }
    },
    {
      selectAction: {
        selector: '#expectation',
        values: ['High salary']
      }
    },
    {
      clickAction: {
        selector: '.development-ways .checkbox:nth-child(1) input'
      }
    },
    {
      clickAction: {
        selector: '.development-ways .checkbox:nth-child(2) input'
      }
    },
    {
      clickAction: {
        selector: '.development-ways .checkbox:nth-child(3) input'
      }
    },
    {
      clickAction: {
        selector: '.development-ways .checkbox:nth-child(4) input'
      }
    },
    {
      clickAction: {
        selector: '.development-ways .checkbox:nth-child(5) input'
      }
    },
    {
      clickAction: {
        selector: '.development-ways .checkbox:nth-child(6) input'
      }
    },
    {
      typeAction: {
        selector: '#comment',
        text: 'Comment'
      }
    },
    {
      clickAction: {
        selector: '#submit'
      }
    },
    {
      getInnerTextAction: {
        selector: '#submit-msg'
      }
    },
    {
      takeScreenshotAction: {
        path: 'screenshot.png',
        fullPage: true
      }
    }
    // {
    //   stopTracingAction: {}
    // }
  ]
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
