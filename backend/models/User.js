const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    bio : {
        type : String
    },
    location : {
        type : String
    },
    webSite : {
        type : String
    },
    phoneNumber : {
        type : Number,
    },
    dateOfBirth : {
        type : Date
    },
    tweets : [{
        type: mongoose.Schema.Types.ObjectId, ref: "Tweet"
    }],
    fallowers : {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    fallowings : [{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }],
    comments : [{
        type: mongoose.Schema.Types.ObjectId, ref: "Coment"
    }],
    retweets : [{
        type : mongoose.Schema.Types.ObjectId, ref : "Tweet"
    }]

},{
    timestamps : true
})

const User = mongoose.model('User', UserSchema)

module.exports = User