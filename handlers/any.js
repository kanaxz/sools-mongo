const { Any } = require('sools-modeling/types')

module.exports = {
  for: Any,
  parse(scope, value) {
    const childs = Any
      .getAllChilds()
      .filter((c) => !c.definition.abstract)
    let model
    if (typeof value === 'string') {
      model = {
        _id: value,
      }
    } else {
      model = value
    }
    return {
      scope,
      value: model,
    }
  },
}