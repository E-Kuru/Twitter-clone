const express = require("express")
const app = express()
const User = require("../models/User")
const { verifyUser, verifySession } = require("../middleware/CheckUser")

app.get('/', verifyUser, async (req,res) => {
    
    try{
        const user = await User.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.get('/:id', async (req,res) => {
    
    const {id} = req.params

    try {
        const oneUser =  await User.findById(id).exec()
        res.json(oneUser)
    } catch {
        res.status(500).json({ error: err })
    }
})

app.post('/newUser', async (req,res) => {

    try {

        const user = new User ({
            ...req.body
        })

        const newUser = await user.save()

        res.json(newUser)
         
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app