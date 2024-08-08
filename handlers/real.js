const { Real } = require('sools-modeling/types')

module.exports = {
  for: Real,
  methods: {
    not({ value }) {
      return {
        $not: [value]
      }
    }
  }
}