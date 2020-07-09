const actions = require('./actions')

const actionPropertySuffix = 'Action'

const actionPropertySuffixLength = actionPropertySuffix.length

const RESPONSE_STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const invoke = (call, callback) => {
  call.request.actions
    .reduce((p, actionPayload) => {
      return p.then(() => {
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
    }, Promise.resolve())
    .then(result => {
      callback(null, {
        status: RESPONSE_STATUS.SUCCESS,
        result
      })
    })
    .catch(error => {
      callback(null, {
        status: RESPONSE_STATUS.ERROR,
        result: error
      })
    })
}

module.exports = { invoke }
