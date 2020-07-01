const actions = require('./actions')

const actionPropertySuffix = 'Action'

const actionPropertySuffixLength = actionPropertySuffix.length

let p = new Promise(function(resolve) {
  resolve()
})

const invoke = (call, callback) => {
  p.then(function(result) {
    call.request.actions.forEach(function(actionPayload) {
      p = p.then(() => {
        const actionProperty = Object.keys(actionPayload).find(key =>
          key.endsWith(actionPropertySuffix)
        )
        if (!actionProperty) {
          return null
        }
        const actionName = actionProperty.substring(
          0,
          actionProperty.length - actionPropertySuffixLength
        )
        const action = actions[actionName]
        if (!action) {
          return null
        }
        const actionArguments = actionPayload[actionProperty] || {}
        console.log(actionPayload)
        return action.call(this, actionArguments)
      })
    })
    p = p.then(function(result) {
      console.log('result', result)
      callback(null, {
        result
      })
    })
  })
}

module.exports = { invoke }
