const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  key: {
    type: String,
    require: true
  }
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
