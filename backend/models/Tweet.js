const { Schema, model } = require("mongoose")

const TweetSchema = Schema({
    content: {
        type: String,
        required: true
    },
    users: {
            type: Schema.Types.ObjectId, ref: "User"
    },
    coments: [{ 
        type: Schema.Types.ObjectId, ref: "Coment" 
    }],
    retweets: [{
        type: Schema.Types.ObjectId, ref: "Tweet"
    }]
}, {
  timestamps: true
})

const Tweet = model('Tweet', TweetSchema)

module.exports = Tweet