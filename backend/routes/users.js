const express = require("express")
const app = express()

const User = require("../models/User")


app.get('/', async (req,res) => {
    
    try{
        const user = await User.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.post('/newUser', async (req,res) => {

    const user = new User ({
        ...req.body
    })

    user.save((err, user) => {
        if (err) {
            res.status(500).json({ error: err })
            return
        }
    })
    res.json(user)
})

module.exports = app