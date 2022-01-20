const express = require("express")
const app = express()
const User = require("../models/User")
const { verifyUser, verifySession } = require("../middleware/CheckUser")

// Get tous les users 

app.get('/', verifyUser, async (req,res) => {
    
    try{
        const user = await User.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Get un user par son id 

app.get('/:id', async (req,res) => {
    
    const {id} = req.params

    try {
        const oneUser =  await User.findById(id).exec()
        res.json(oneUser)
    } catch {
        res.status(500).json({ error: err })
    }
})

// Permet de créer un user 

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

app.put('/fallow/:User1/fallowed/:User2', async (req,res) => {
    
    const {User1, User2} = req.params
    try{
        const fallowingUser = await User.findById({_id : User1}).exec()
        fallowingUser.fallowings = [...fallowingUser.fallowings , User2]
        fallowingUser.save()
        console.log("User1 : ",fallowingUser);
        
        const fallowedUser = await User.findById({_id : User2}).exec()
        console.log("User fallowed : ",fallowedUser);
        fallowedUser.fallowers = [...fallowedUser.fallowings , User1]
        fallowedUser.save()

        res.json({succes : `U now follow someone`})

    } catch (err) {
        res.status(500).json({ error: err })
    }
})


module.exports = app