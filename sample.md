{
  "actions": [
    {
      "launchAction": {
        "headless": false
      }
    },
    {
      "gotoAction": {
        "url": "https://katalon-test.s3.amazonaws.com/aut/html/form.html"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#first-name",
        "text": "First Name"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#last-name",
        "text": "Last Name"
      }
    },
    {
      "clickAction": {
        "selector": "input[type=radio][name=gender]"
      }
    },
    {
      "clickAction": {
        "selector": "#dob"
      }
    },
    {
      "clickAction": {
        "selector": "body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#address",
        "text": "Address"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#email",
        "text": "email@email.com"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#password",
        "text": "Password"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#company",
        "text": "Company"
      }
    },
    {
      "selectAction": {
        "selector": "#role",
        "values": [
          "Manager"
        ]
      }
    },
    {
      "selectAction": {
        "selector": "#expectation",
        "values": [
          "High salary"
        ]
      }
    },
    {
      "clickAction": {
        "selector": ".development-ways .checkbox:nth-child(1) input"
      }
    },
    {
      "clickAction": {
        "selector": ".development-ways .checkbox:nth-child(2) input"
      }
    },
    {
      "clickAction": {
        "selector": ".development-ways .checkbox:nth-child(3) input"
      }
    },
    {
      "clickAction": {
        "selector": ".development-ways .checkbox:nth-child(4) input"
      }
    },
    {
      "clickAction": {
        "selector": ".development-ways .checkbox:nth-child(5) input"
      }
    },
    {
      "clickAction": {
        "selector": ".development-ways .checkbox:nth-child(6) input"
      }
    },
    {
      "clearAndTypeAction": {
        "selector": "#comment",
        "text": "Comment"
      }
    },
    {
      "clickAction": {
        "selector": "#submit"
      }
    },
    {
      "getInnerTextAction": {
        "selector": "#submit-msg"
      }
    },
    {
      "closeAction": {
        
      }
    }
  ]
}