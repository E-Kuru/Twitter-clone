const express = require("express")
const app = express()
const passport = require('../config/passport')
const User = require('../models/User')

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


module.exports = app