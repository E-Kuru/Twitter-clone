const express = require("express")
const app = express()
const passport = require("passport")

const User = require("../models/User")


app.get('/', async (req,res) => {
    
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

app.post(`/login`, passport.authenticate('local'), (req, res) => {

    if (req.user) {
      req.logIn(req.user, (err) => {
        if (err) throw err
        res.status(200).json(req.user)
      })
    }
})

app.post('/signup', (req,res) => {

    const newUser = new User ({
        ...req.body
    })
    
    newUser.save((err, user) => {
        if (err) {
            res.status(500).json({ error: err })
            return
        }

        if (user) {
            req.logIn(user, (err) => {
              if (err) throw err
              res.status(200).json(user)
            })
        }
    })

    
    
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
        res.json(user)
    })
})

module.exports = app