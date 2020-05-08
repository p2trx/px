const mobileScenario = [
  {
    emulateAction: {
      device: 'iPhone X'
    }
  },
  {
    setViewportAction: {
      width: 400,
      height: 900
    }
  },
  {
    gotoAction: {
      url: 'https://katalon-test.s3.amazonaws.com/aut/html/form.html'
    }
  },
  {
    startTracingAction: {
      path: 'test/trace.json'
    }
  },
  {
    waitAction: {
      time: 2000
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
    tapAction: {
      selector: 'input[type=radio][name=gender]'
    }
  },
  {
    tapAction: {
      selector: '#dob'
    }
  },
  {
    tapAction: {
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
    tapAction: {
      selector: '.development-ways .checkbox:nth-child(1) input'
    }
  },
  {
    tapAction: {
      selector: '.development-ways .checkbox:nth-child(2) input'
    }
  },
  {
    tapAction: {
      selector: '.development-ways .checkbox:nth-child(3) input'
    }
  },
  {
    tapAction: {
      selector: '.development-ways .checkbox:nth-child(4) input'
    }
  },
  {
    tapAction: {
      selector: '.development-ways .checkbox:nth-child(5) input'
    }
  },
  {
    tapAction: {
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
    evaluateAction: {
      evaluateFunction: 'window.scrollTo(0, 1000000)'
    }
  },
  {
    waitAction: {
      time: 2000
    }
  },
  {
    tapAction: {
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
      path: 'test/screenshoot/mobile.png',
      fullPage: true
    }
  },
  {
    stopTracingAction: {}
  },
  {
    closeAction: {}
  }
]

module.exports = {
  mobileScenario
}
