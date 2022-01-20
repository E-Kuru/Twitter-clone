const express = require("express")
const app = express()
const Coment = require('../models/Coment')
const Tweet = require("../models/Tweet")
const User = require("../models/User")
const { verifyUser } = require("../middleware/CheckUser")

// Get tous les comments 

app.get('/', verifyUser,  async (req, res) => {
    
    try{
        const coments = await Coment.find().exec()

        res.json(coments)

    } catch (err){
        res.status(500).json({ error: err })
    }
})

// Get un seul coment 

app.get('/:id', verifyUser, async (req, res) => {

    const {id} = req.params

    try{

        const coment = await Coment.findById(id).exec()
        res.json(coment)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Get tous les coments d'un tweet 

app.get('/tweet/:id', verifyUser, async (req,res) => {
    
    const {id} = req.params

    try {
        const allComents = await Coment.find({tweet_id : id}).exec()
        res.json(allComents)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Post un coment 

app.post('/',verifyUser, async (req, res) => {

    try {
        const coment = new Coment({
            ...req.body
        })
        const OneComent = await coment.save()
        
        const findTweet = await Tweet.findById(req.body.tweet_id).exec()
        findTweet.coments = [...findTweet.coments, OneComent._id]
        await findTweet.save()

        console.log(findTweet);

        const findUser = await User.findById(req.body.user_id).exec()
        findUser.coments = [...findUser.coments, OneComent._id]
        console.log(findUser);
        await findUser.save()        

        res.json(OneComent)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Delete le coment d'un user 

app.delete('/:id',verifyUser, async (req,res) => {

    const {id} = req.params

    try{
        const findComent = await Coment.findById(id).lean().exec()
        
        const findTweet = await Tweet.findOne({_id : findComent.tweet_id.valueOf()}).exec()
        const findUser = await User.findOne({_id : findComent.user_id.valueOf()}).exec()

        const comentsTweetUpdate = findTweet.coments.filter(e => e != id)
        findTweet.coments = comentsTweetUpdate
        findTweet.save()
        
        const comentUserUpdate = findUser.coments.filter(e => e != id)
        findUser.coments = comentUserUpdate
        findUser.save()

        const deleteComent = await Coment.deleteOne({_id : id})

        res.json({succes : "This coment successfully been deleted"})

    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app