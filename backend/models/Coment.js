const { Schema, model } = require("mongoose")

const ComentSchema = Schema({

    content: {
        type: String,
        required: true
    },
    user: {
            type: Schema.Types.ObjectId, ref: "User"
    },
    tweets: { 
        type: Schema.Types.ObjectId, ref: "Tweet" 
    },
   
}, {
    timestamps: true
})

const Coment = model('Coment', ComentSchema)

module.exports = Coment