var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    name: String,
    avatar: String
});

var User = mongoose.model("User", userSchema, 'users');

module.exports = User;