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

app.post('/signup', async (req,res) => {

    try {

      const newUser = new User ({
        ...req.body
    })

    const signupUser = await newUser.save()
    res.status(200).json(signupUser)

    } catch (err) {
      res.status(500).json({ error: err })
    }
})


module.exports = app