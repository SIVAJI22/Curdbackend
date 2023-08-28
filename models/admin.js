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
 address:{
    type:String,
 },
 password:{
  type:String,
 },
 Department:{
    type:String,
 },
  Mobile: {
    type: String,
 
  },
});

const adminusers = mongoose.model("admin", usersSchema);
module.exports = adminusers;
