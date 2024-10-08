const { String } = require('sools-modeling/types')

module.exports = {
  for: String,
  methods: {
    match({ value }, regex) {
      return {
        $regexMatch: {
          input: {
            $toUpper: value
          },
          regex: {
            $toUpper: regex
          },
        }
      }
    },
    toUpperCase({ value }) {
      return {
        $toUpper: value
      }
    },
  },
  check(value) {
    return typeof value === 'string'
  },
  parse(scope, value) {
    if (typeof value !== 'string') {
      throw new Error()
    }
    return {
      scope,
      value,
      type: String,
    }
  }
}