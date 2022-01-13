const express = require("express")
const app = express()
const Tweet = require('../models/Tweet')

app.post('/', async (req, res) => {
    const tweet = new Tweet({
        ...req.body
    })
    tweet.save((err, student) => {
        if(err) {
            res.status(500).json({ error: err })
            return
        }

        res.json(student)
        console.log(student);
    })

})


module.exports = app