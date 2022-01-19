const express = require("express")
const app = express()
const Coment = require('../models/Coment')
const Tweet = require("../models/Tweet")
const User = require("../models/User")
const { verifyUser } = require("../middleware/CheckUser")

app.get('/', verifyUser, async (req, res) => {
    
    try{
        const coments = await Coment.find.exec()

        res.json(coments)

    } catch (err){
        res.status(500).json({ error: err })
    }
})

app.get('/:id', verifyUser, async (req, res) => {

    const {id} = req.params

    try{

        const coment = await Coment.findById(id).exec()
        res.json(coment)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.post('/', async (req, res) => {

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

app.delete('/:id',verifyUser, async (req,res) => {

    const {id} = req.params

    try{
        const findComent = await Coment.findById(id).lean().exec()
        
        const findTweet = await Tweet.findOne({_id : findComent.tweet_id.valueOf()}).exec()

        const comentsUpdate = findTweet.coments.filter(e => e != id)
        findTweet.coments = comentsUpdate
        findTweet.save()

        const deleteTweet = await Coment.deleteOne({_id : id})

        res.json({succes : "This coment successfully been deleted"})

    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app