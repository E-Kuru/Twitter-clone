const express = require("express")
const app = express()
const Tweet = require('../models/Tweet')
const User = require('../models/User')

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
    
    try{
        const tweet = await Tweet.findById(id).exec()
        
        res.json(tweet)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.get('/user/:id', async (req,res) => {
    
    const {id} = req.params

    console.log(id);
    
    try {
        const allTweets = await Tweet.find({user_id : id}).exec()
        res.json(allTweets)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.post('/', async (req, res) => {

    try {

        const tweet = new Tweet({
            ...req.body
        })
        const OneTweet = await tweet.save()

        const findUser = await User.findById(req.body.user_id).exec()
        findUser.tweets = [...findUser.tweets, OneTweet._id]
        await findUser.save()

        res.send(OneTweet)

    } catch (err) {
        res.status(500).json({ error: err })
    }

})


module.exports = app