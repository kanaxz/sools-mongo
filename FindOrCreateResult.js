const { Object, Bool, Model } = require('sools-modeling')


module.exports = class FindOrCreateResult extends Object {

}
  .define()
  .properties({
    created: Bool,
    model: Model,
  })