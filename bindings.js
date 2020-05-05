const actions = require('./actions')

const actionPropertySuffix = 'Action'

const actionPropertySuffixLength = actionPropertySuffix.length

const invoke = (call, callback) => {
  let p = new Promise(function(resolve) {
    resolve()
  })
  call.request.actions.forEach(function(actionPayload) {
    p = p.then(() => {
      const actionProperty = Object.keys(actionPayload).find(key =>
        key.endsWith(actionPropertySuffix)
      )
      console.log(`Received ${actionProperty}`)
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
      return action.call(this, actionArguments)
    })
  })
  p.then(function(result) {
    callback(null, {
      result
    })
  })
}

module.exports = { invoke }
