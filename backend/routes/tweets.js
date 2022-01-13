const express = require("express")
const app = express()
const Tweet = require('../models/Tweet')


app.get('/', async (req,res) => {
    
    try{
        const tweets = await Tweet.find().exec()
        
        res.json(tweets)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.get('/:id', async (req,res) => {
    
    const {id} = req.params

    try {
        const tweet =  await Tweet.findById(id).exec()
        res.json(tweet)
    } catch {
        res.status(500).json({ error: err })
    }
})

app.post('/', async (req, res) => {
    const tweet = new Tweet({
        ...req.body
    })
    tweet.save((err, tweet) => {
        if(err) {
            res.status(500).json({ error: err })
            return
        }

        res.json(tweet)
        console.log(tweet);
    })

})





module.exports = app