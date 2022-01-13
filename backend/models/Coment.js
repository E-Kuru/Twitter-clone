const { Schema, model } = require("mongoose")

const ComentSchema = Schema({

    content: {
        type: String,
        required: true
    },
    user_id: {
            type: Schema.Types.ObjectId, ref: "User"
    },
<<<<<<< HEAD
    tweets: { 
=======
    tweet_id: { 
>>>>>>> 11b0b1e53472ef4dcb2011c1e0cd67767c3f0169
        type: Schema.Types.ObjectId, ref: "Tweet" 
    },
   
}, {
    timestamps: true
})

const Coment = model('Coment', ComentSchema)

module.exports = Coment