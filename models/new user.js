const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
name: {
    type: String,
  },
  Dob: {
    type: String,
  },
  email: {
    type: String,
   
  },
  password:{
    type:String,
  },
 address:{
    type:String,
 },
 Department:{
    type:String,
 },
  Mobile: {
    type: String,
 
  },
});

const users = mongoose.model("Newusers", usersSchema);
module.exports = users;
