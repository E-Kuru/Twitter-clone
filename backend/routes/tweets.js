const express = require("express")
const app = express()
const Tweet = require('../models/Tweet')
const User = require('../models/User')
const { verifyUser } = require("../middleware/CheckUser")

// Get tous les tweets 

app.get('/', async (req,res) => {
    
    try{
        const tweets = await Tweet.find().exec()
        
        res.json(tweets)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Get un seul tweet par son ID 

app.get('/:id', verifyUser, async (req,res) => {
    
    const {id} = req.params
    
    try{
        const tweet = await Tweet.findById(id).exec()
        
        res.json(tweet)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Get tous les tweets d'un user 

app.get('/user/:id', verifyUser, async (req,res) => {
    
    const {id} = req.params

    try {
        const allTweets = await Tweet.find({user_id : id}).exec()
        res.json(allTweets)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Post un tweet 

app.post('/', verifyUser, async (req, res) => {

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

// Supprime le tweet d'un user 

app.delete('/:id',verifyUser, async (req,res) => {

    const {id} = req.params

    try{
        const findTweet = await Tweet.findById(id).lean().exec()
        console.log("User id", findTweet.user_id.valueOf());
        
        const findUser = await User.findOne({_id : findTweet.user_id.valueOf()}).exec()
        console.log("FindUser", findUser);

        const tweetUpdated = findUser.tweets.filter(e => e != id)
        findUser.tweets = tweetUpdated
        findUser.save()

        const deleteTweet = await Tweet.deleteOne({_id : id})

        res.json({succes : "This tweet successfully been deleted"})

    } catch (err) {
        console.log("Catch error", err);
        res.status(500).json({ error: err })
    }
})

// Permet de retweet 

app.put('/retweet/:tweetId/user/:userId', async (req,res) => {
    
    const {tweetId, userId} = req.params

    try{
        const findTweet = await Tweet.findById({_id : tweetId})
        findTweet.retweets = [...findTweet.retweets, userId]
        findTweet.save()
        
        const findUser = await User.findById({_id : userId})
        findUser.retweets = [...findUser.retweets, tweetId]
        findUser.save()

        res.json({succes : "U successfully rt this tweet, congratulation"})

    } catch (err) {
        res.status(500).json({ error: err })
    }
})


module.exports = app