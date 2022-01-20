const { Schema, model } = require("mongoose")

const ComentSchema = Schema({

    content: {
        type: String,
        required: true
    },
    user_id: {
            type: Schema.Types.ObjectId, ref: "User"
            // type: String,
            // required: true
    },
    tweet_id: { 
        type: Schema.Types.ObjectId, ref: "Tweet" 
        // type: String,
        // required: true
    },
   
}, {
    timestamps: true
})

const Coment = model('Coment', ComentSchema)

module.exports = Coment