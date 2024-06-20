const mongoose = require("mongoose")
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
    throw new Error('MongoDB URI is not defined in environment variables');
  }
  mongoose.connect(MONGO_URL)


const UserSchema = mongoose.Schema({

    username : "string",
    firstName : "string",
    lastName : "string",
    password : "string"
})

const AccountSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : "number",
        required : true
    }
})

const User = mongoose.model("User" , UserSchema)
const Account = mongoose.model("Account" , AccountSchema)

module.exports = {
    User,
    Account 
}