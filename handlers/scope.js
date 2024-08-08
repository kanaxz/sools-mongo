const Scope = require('sools-modeling/types/Scope')

module.exports = {
  for: Scope,
  async parse(scope, body) {
    return {
      scope,
      value: body,
    }
  }
}