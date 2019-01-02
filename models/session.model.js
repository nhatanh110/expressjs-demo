var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sessiontSchema = new Schema({
  id: String,
  cart: {
    image: String,
    description: String
  }
});

var Session = mongoose.model("Session", sessiontSchema, "sessions");

module.exports = Session;
