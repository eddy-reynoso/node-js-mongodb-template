let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let exampleCollectionItem = new Schema({
  attribute: String
});

module.exports = mongoose.model("ExampleCollectionItem", exampleCollectionItem);
