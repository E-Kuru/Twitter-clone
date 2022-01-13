const { Schema, model } = require("mongoose")

const ComentSchema = Schema({

    content: {
        type: String,
        required: true
    },
    user_id: {
            type: Schema.Types.ObjectId, ref: "User"
    },
    tweet_id: { 
        type: Schema.Types.ObjectId, ref: "Tweet" 
    },
   
}, {
    timestamps: true
})

const Coment = model('Coment', ComentSchema)

module.exports = Coment