const express = require("express")
const app = express()
const Coment = require('../models/Coment')
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

app.post('/',  verifyUser, async (req, res) => {
    try {

        const comentBody = new Coment({
            ...req.body
        })
        const coment = await comentBody.save()

        res.json(coment)

    } catch (err) {
        res.status(500).json({ error: err })
    
    }
})

module.exports = app